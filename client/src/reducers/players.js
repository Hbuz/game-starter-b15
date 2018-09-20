import { UPDATE_PLAYER, CLEAR_PLAYER } from '../actions/games'

const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PLAYER:
      return {
        ...state,
        player: payload
      }
    case CLEAR_PLAYER:
      return ''
    default:
      return state
  }
}
