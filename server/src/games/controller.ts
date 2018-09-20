// import { JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get, Body, Patch } from 'routing-controllers'
import { JsonController, CurrentUser, Post, Param, BadRequestError, HttpCode, Patch, Get, NotFoundError, ForbiddenError, Body } from 'routing-controllers'
import User from '../users/entity'
// import { Game, Player, Board } from './entities'
import Game from './entity'
import Player from '../players/entity'
import { Cell, Dice, rollDice } from '../lib/utils'
import { Board } from '../lib/utils'
// import {IsBoard, isValidTransition, calculateWinner, finished} from './logic'
// import { Validate } from 'class-validator'
import { io } from '../index'


// class GameUpdate {         --> don't need because there is no body
//   // @Validate(IsBoard, {
//   //   message: 'Not a valid board'
//   // })
//   board: Cell[][]
// }


@JsonController()
export default class GameController {

  // @Authorized()  --> COMMENTED FOR TESTS
  @Post('/games')
  @HttpCode(201)
  async createGame(
    @CurrentUser() user: User,
    @Body() avatar
  ) {
    const entity = await Game.create().save()

    const player = await Player.create({
      game: entity,
      user,
      playerNumber: "player1",
      currentCell: 1,
      avatar: avatar
    }).save()

    const game = await Game.findOneById(entity.id)
    if (!game) throw new BadRequestError(`Game does not exist`)
    game.board[0][0].current.push(player)
    game.turn = 1 //CHECK
    await game.save()

    io.emit('action', {
      type: 'ADD_GAME',
      payload: game
    })

    return game
  }


  // @Authorized()  --> COMMENTED FOR TESTS
  @Post('/games/:id([0-9]+)/players') //--> for joining game
  @HttpCode(201)
  async joinGame(
    @CurrentUser() user: User,
    @Param('id') gameId: number,
    @Body() avatar
  ) {
    const game = await Game.findOneById(gameId)
    if (!game) throw new BadRequestError(`Game does not exist`)
    if (game.status !== 'pending') throw new BadRequestError(`Game is already started`)
    game.status = 'started'
    await game.save()

    const player = await Player.create({
      game,
      user,
      playerNumber: 'player2',
      currentCell: 1,
      avatar: avatar
    }).save()

    const gameNew = await Game.findOneById(gameId)
    if (!gameNew) throw new BadRequestError(`Game does not exist`)
    gameNew.board[0][0].current.push(player)
    await gameNew.save()


    // io.emit('action', {
    //   type: 'UPDATE_GAME',
    //   payload: await Game.findOneById(game.id)
    // })
    io.emit('action', {
      type: 'UPDATE_GAME',
      payload: gameNew
    })

    return player
  }


  @Patch('/games/:id([0-9]+)')
  async updateGame(
    @CurrentUser() user: User,
    @Param('id') gameId: number,
    // @Body() update: GameUpdate   --> the client don't send anything
  ) {


    io.emit('action', {
      type: 'CLEAR_PLAYER'
    })


    const game = await Game.findOneById(gameId)
    if (!game) throw new NotFoundError(`Game does not exist`)

    const player = await Player.findOne({ user, game })
    if (!player) throw new ForbiddenError(`You are not part of this game`)  //--> commented for test
    if (game.status !== 'started') throw new BadRequestError(`The game is not started yet`)

    if (player.userId !== game.turn) throw new BadRequestError(`It's not your turn`)

    //   if (!isValidTransition(player.symbol, game.board, update.board)) {
    //     throw new BadRequestError(`Invalid move`)
    //   }
    // const winner = calculateWinner(update.board) //--> check if the player win (reach the end)
    //   if (winner) {
    //     game.winner = winner
    //     game.status = 'finished'
    //   }
    //   else if (finished(update.board)) {
    //     game.status = 'finished'
    //   }
    //   else {
    // game.turn = player.symbol === 'x' ? 'o' : 'x'
    //   }

    //FIX ME!!!
    //ROLL THE DICE
    const newBoardGame: Board = selectCell(game, player)  //Removing player from current cell

    const score: Dice = rollDice()

    game.dice = score

    const newPathCell: number = player.currentCell + score[0] + score[1]
    // const newPathCell: number = 13 //UNCOMMENT IF YOU WANT TO TEST THE SNAKE

    const finishCell = game.board[game.board.length - 1][game.board[game.board.length - 1].length - 1]  //Pick the last cell of 2-dimensional array

    //CHECK IF WON
    if (newPathCell > finishCell.cellPathNumber) {
      player.currentCell = finishCell.cellPathNumber
      game.winner = player
      game.status = 'finished'  //END OF THE GAME
    } else {
      player.currentCell = newPathCell
      // game.turn = player.userId === 1 ? 2 : 1
    }

    player.save()

    const boardAfterMove: Board = moveToNewCell(newBoardGame, player)  //Add player to the calculated cell

    //CHEKC IF THE PLAYER WAS TRAPPED
    console.log("THE NEW PLAYER AFTER TRAP: " + JSON.stringify(player))
    game.board = moveIfTrapped(boardAfterMove, player)

    // const winner = calculateWinner(game.board, player.currentCell.cellPathNumber)

    game.turn = player.userId === 1 ? 2 : 1

    await game.save()

    io.emit('action', {
      type: 'UPDATE_GAME',
      payload: game
    })

    return game
  }


  // @Authorized()  --> COMMENTED FOR TESTS
  @Get('/games/:id([0-9]+)')
  getGame(
    @Param('id') id: number
  ) {
    return Game.findOneById(id)
  }


  // @Authorized()  --> COMMENTED FOR TESTS
  @Get('/games')
  getGames() {
    return Game.find()
  }
}


const selectCell = (game, player: Player): Board => {  //selectedCell is current or next
  return game.board.map((row: Cell[]) => {
    return row.map((cell: Cell) => {
      if (cell.cellPathNumber === player.currentCell) {
        const index: number = cell.current.indexOf(player)//Get index of player in the current cell
        cell.current.splice(index, 1) //remove player from cell
      }
      return cell
    })
  })
}

const moveToNewCell = (newBoardGame, player: Player): Board => {  //newCellPlayer is the new cell, after roll the dice
  return newBoardGame.map((row: Cell[]) => {
    return row.map((cell: Cell) => {
      if (cell.cellPathNumber === player.currentCell) {
        if (cell.hiddenTrap) {
          player.trap = cell.hiddenTrap
          player.currentCell = player.currentCell - trapSwitch(cell.hiddenTrap)
          player.save()

          io.emit('action', {
            type: 'UPDATE_PLAYER',
            payload: player
          })

        } else {
          cell.current.push(player)
        }
      }
      return cell
    })
  })
}


const moveIfTrapped = (newBoardTrapped, player: Player): Board => {
  return newBoardTrapped.map((row: Cell[]) => {
    return row.map((cell: Cell) => {
      console.log("EVERYTHING: " + cell.cellPathNumber + "      " + JSON.stringify(player))
      if (cell.cellPathNumber === player.currentCell && !cell.current.includes(player)) { //IF THE PLAYER WAS TRAPPED
        console.log("I AM INSIDE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        cell.current.push(player)                                                   //HERE WILL BE MOVED TO THE RIGHT CELL
      }
      return cell
    })
  })
}


const trapSwitch = (hiddenTrap: string): number => {
  let cellToRemove = 0
  switch (hiddenTrap) {
    case 'snake':
      cellToRemove = 5  //number of cell to go back
      break
    default:
      cellToRemove = 0
      break
  }
  return cellToRemove
}



