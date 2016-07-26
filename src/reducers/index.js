import { combineReducers } from 'redux'
import { INITIAL_STATE, setPlayers, setUser, setVisible, setInitialPlayer } from '../core'
import {
  RECEIVE_PLAYERS,
  LOGIN,
} from '../actions'

function session(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return setUser(state, action.username)
    default:
      return state
  }
}

function visible(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return setVisible(state)
    default:
      return state
  }
}

function players(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return setInitialPlayer(state, {playerName: action.username})
    case RECEIVE_PLAYERS:
      return setPlayers(state, action.players)
    default:
      return state
  }
}


const rootReducer = combineReducers({
  //receivePlayers,
  session,
  visible,
  players,
})

export default rootReducer
