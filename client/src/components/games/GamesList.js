import React, { PureComponent } from 'react'
import { getGames, createGame } from '../../actions/games'
import { getUsers } from '../../actions/users'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './GamesList.css'
import { getRandomCharacter } from '../../lib/utils'

class GamesList extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.games === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  renderGame = (game) => {
    const { users, history } = this.props
    return (<div key={game.id}>
        <div color="textSecondary">
          This game is played by&nbsp;
          {
            game.players.map(player => users[player.userId].firstName)
              .join(' and ')
          }
        </div>
      </div>)
  }

  createGame = () => this.props.createGame(getRandomCharacter())

  render() {
    const { games, users, authenticated } = this.props
    console.log("game",games); 
    if (!authenticated) return (
      <Redirect to="/login" />
    )
    if (games === null || users === null) return null
    return (
      console.log("games test",games ))
      
      testgames.map((dynamicdata, i) => {
         <p>{dynamicdata}</p>
        })
        
     /* <div className="outer-paper">
        <Button
          color="primary"
          variant="raised"
          onClick={this.createGame}
          className="create-game"
        >
          Create New Event
      </Button>
        <div>
          {games.map(game => this.renderGame(game))}
        </div>
      </div>*/
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  games: state.games === null ?
    null : Object.values(state.games).sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, { getGames, getUsers, createGame })(GamesList)
