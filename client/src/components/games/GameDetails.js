import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Paper from 'material-ui/Paper'
// import Button from 'material-ui/Button'
import Board from './Board'
import './GameDetails.css'
import player2 from '../../images/player2.png'

class GameDetails extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  joinGame = () => this.props.joinGame(this.props.game.id, player2)

  updateGame = () => this.props.updateGame(this.props.game.id, this.props.game.board)

  makeMove = (toRow, toCell) => {
    const {game, updateGame} = this.props

    const board = game.board.map(
      (row, rowIndex) => row.map((cell, cellIndex) => {
        if (rowIndex === toRow && cellIndex === toCell) return game.turn
        else return cell
      })
    )
    updateGame(game.id, board)
  }
  render() {
    const {game, users, authenticated, userId, players} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)

    const winner = game.players
      .filter(p => p.symbol === game.winner)
      .map(p => p.userId)[0]

      let trap = ''
    if(players){
      trap = JSON.stringify(players.player.trap)
    }

    return (<div className="outer-paper">
      <h1>Game #{game.id}</h1>

      <p>Status: {game.status}</p>

      {
        game.status === 'started' &&
        player && player.userId === game.turn &&
        <div>It's your turn!</div>
      }

      {
        game.status === 'pending' &&
        game.players.map(p => p.userId).indexOf(userId) === -1 &&
        <button onClick={this.joinGame}>Join Game</button>
      }

      {
        winner &&
        <p>Winner: {users[winner].firstName}</p>    //CHECK!!!
      }
        
      {/* <Button color="primary" className="tile" style={{backgroundColor:"#96B7F0"}} onClick={this.updateGame} >Dice</Button> */}
      <button onClick={this.updateGame} className="button-style">Dice</button>
      {/* <h3>{game.dice[0]}</h3>
      <h3>{game.dice[1]}</h3> */}
      <span className="Font-style"><em><b>Dice Score 1:--> {game.dice?game.dice[0]:0}</b></em></span><span className="Font-styles"><em><b>
      Dice Score 2:--> {game.dice?game.dice[1]:0}</b></em></span>
      
      {/*{game.turn === player.userId ? <div></div>:<div>prompt("This is not your chance")</div>}*/}

      <h1>{ trap }</h1>

           <hr />

      {
        game.status !== 'pending' &&
        <Board board={game.board} makeMove={this.makeMove} />
      }
    
    </div>)
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users,
  players: state.players
})

const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)
