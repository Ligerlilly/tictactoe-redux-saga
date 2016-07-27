import { combineReducers } from 'redux'
import {
  INITIAL_STATE,
  setPlayers,
  setUser,
  setVisible,
  setInitialPlayer,
  setChallengeID,
  setChallengerPlayer,
  setChallengedPlayer,
} from '../core'
import {
  RECEIVE_PLAYERS,
  LOGIN,
  RECEIVE_CHALLENGE_ID,
  CHALLENGED_PLAYER,
  CHALLENGER_PLAYER,
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

function challengeID(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_CHALLENGE_ID:
      return setChallengeID(state, action.resp.challengeID)
    default:
      return state
  }
}

function challengerPlayer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_CHALLENGE_ID:
      return setChallengerPlayer(state, action.resp.challengerPlayer)
    default:
      return state
  }
}

function challengedPlayer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_CHALLENGE_ID:
      return setChallengedPlayer(state, action.resp.challengedPlayer)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  //receivePlayers,
  session,
  visible,
  players,
  challengeID,
  challengerPlayer,
  challengedPlayer,
})

export default rootReducer
