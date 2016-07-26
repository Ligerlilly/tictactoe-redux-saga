import { combineReducers } from 'redux'
import { INITIAL_STATE, setPlayers, setUser, setVisible, setInitialPlayer } from '../core'
import {
  RECEIVE_PLAYERS,
  LOAD_USER,
} from '../actions'

function session(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_USER:
      return setUser(state, action.username)
    default:
      return state
  }
}

function visible(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_USER:
      return setVisible(state)
    default:
      return state
  }
}

function players(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_USER:
      return setInitialPlayer(state, action.username)
    default:
      return state
  }
}

// function receivePlayers(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case RECEIVE_PLAYERS:
//       return setPlayers(state, action.players)
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  //receivePlayers,
  session,
  visible,
  players,
})

export default rootReducer
