
const AppState = {
  //game: {},
  players: [],
  status: {},
  session: {},
  //challengedPlayer: '',
  //activeChallenge: '',
  //challengeStatus: '',
  challengeID: {},
}



export const INITIAL_STATE = AppState;

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
