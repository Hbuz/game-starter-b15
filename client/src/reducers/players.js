import { UPDATE_PLAYER, CLEAR_PLAYER } from '../actions/games'

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PLAYER:
      console.log("CIAOOOOO: ")
      return {
        ...state,
        player: payload
      }
    case CLEAR_PLAYER:
      console.log("CIAOOOOO: ")
      return ''
    default:
      return state
  }
}
