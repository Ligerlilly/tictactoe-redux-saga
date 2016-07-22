import { combineReducers } from 'redux'
import { INITIAL_STATE } from '../core'
import {
  JOIN_PLAYERS,
  LOAD_PLAYERS,
} from '../actions'

function loadPlayers(state = {}, action) {
  switch (action.type) {
    case LOAD_PLAYERS:
      return action.players
    default:
      return state
  }
}

function joinPlayers(state = {}, action) {
  switch (action.type) {
    case JOIN_PLAYERS:
      return action.playerName
    default:
      return state
  }
}

const rootReducer = combineReducers({
  loadPlayers,
  joinPlayers,
})

export default rootReducer
