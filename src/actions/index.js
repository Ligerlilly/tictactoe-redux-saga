export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
export const LOGIN = 'LOGIN'

export function getPlayers() {
  return {
    type: 'LOAD_PLAYERS',
  }
}

export function receivePlayers(players) {
  return {
    type: RECEIVE_PLAYERS,
    players: players,
  }
}


export function session(username) {
  return {
    type: LOGIN,
    username: username
  }
}
