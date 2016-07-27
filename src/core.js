
const AppState = {
  //game: {},
  players: [],
  status: {},
  session: {},
  challengedPlayer: '',
  challengerPlayer: '',
  //activeChallenge: '',
  //challengeStatus: '',
  challengeID: {},
}

export const INITIAL_STATE = AppState;

export function setChallengerPlayer(state, challengerPlayer) {
  return challengerPlayer
}

export function setChallengedPlayer(state, challengedPlayer) {
  return challengedPlayer
}

export function setChallengeID(state, id) {
  return {id: id}
}

export function setPlayers(state, players) {
   return players
}

export function setUser(state, username) {
    return {username: username}
}

export function setInitialPlayer(state, username) {
    return [username, '']
}

export function setVisible(state, username) {
    return {items: 'roster'}
}
