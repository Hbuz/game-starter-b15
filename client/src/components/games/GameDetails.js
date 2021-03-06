import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getGames, joinGame, updateGame } from '../../actions/games'
import { getUsers } from '../../actions/users'
import { userId } from '../../jwt'
import Board from './Board'
import './GameDetails.css'
import { getMedia, getRandomCharacter } from '../../lib/utils'
import Grid from 'material-ui/Grid';


class GameDetails extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  

  joinGame = () => this.props.joinGame(this.props.game.id, getRandomCharacter())

  updateGame = () => this.props.updateGame(this.props.game.id, this.props.players)

  render() {

    const { game, users, authenticated, userId, players } = this.props
    if (!authenticated) return (
      <Redirect to="/login" />
    )

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)

    const winner = game.winner

    return (
      <Grid
        container
        spacing={0}
        alignItems='center'
        direction='raw'
        justify='space-evenly'
      >
        <Grid item xs={1}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item>
              {game && game.players && game.players.length > 0 && game.players[0].playerNumber === 'player1' &&
                <img width="400" height="400" src={getMedia(JSON.parse(game.players[0].avatar))} />
              }
              {game && game.players && game.players.length > 1 && game.players[1].playerNumber === 'player1' &&
                <img width="400" height="400" src={getMedia(JSON.parse(game.players[1].avatar))} />
              }
            </Grid>
            <Grid item><h1>PLAYER 1</h1></Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <div className="outer-paper">
            <h1>Game #{game.id}</h1>

            <p>Status: {game.status}</p>

            {
              game.status === 'started' &&
              player && player.userId === game.turn &&
              <div>It's your turn!</div>
            }

            {
              game.status === 'started' &&
              player && player.userId !== game.turn &&
              <div>Wait the other player move</div>
            }

            {
              game.status === 'pending' &&
              game.players.map(p => p.userId).indexOf(userId) === -1 &&
              <button onClick={this.joinGame()}>Join Game</button>
            }

            {
              winner &&
              <h1>Winner: {users[winner.userId].firstName} 
                {alert(`${users[winner.userId].firstName} WIN!!!`)}
              </h1>
            }

            {
              game.status === 'started' &&
              <div>
                <button onClick={this.updateGame} className="button-style">Dice</button>
                <span className="Font-style-Dice"><em><b>Dice Score 1:<span ClassName="words"> {game.dice ? game.dice[0] : 0}</span></b></em></span><span className="Font-styles-Dice2"><em><b>
                  Dice Score 2: {game.dice ? game.dice[1] : 0}</b></em></span>
                {player && player.currentCell &&
                  <span><h2>Previous cell: {player.currentCell}</h2></span>}
              </div>
            }
            {players && players.player.trap.name !== '' &&
              <h1>{players.player.playerNumber} got a {players.player.trap.name}! {players.player.trap.desc}</h1>
            }
            <hr />


            {
              game.status !== 'pending' &&
              <Board board={game.board} />
            }
          </div>

        </Grid>
        <Grid item xs={2}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item>
              {game && game.players && game.players.length > 1 && game.players[0].playerNumber === 'player2' &&
                <img width="400" height="400" src={getMedia(JSON.parse(game.players[0].avatar))} />
              }
              {game && game.players && game.players.length > 1 && game.players[1].playerNumber === 'player2' &&
                <img width="400" height="400" src={getMedia(JSON.parse(game.players[1].avatar))} />
              }
            </Grid>
            <Grid item><h1>PLAYER 2</h1></Grid>
          </Grid>
        </Grid>
      </Grid>
    )
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
