export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
export const LOAD_USER = 'LOAD_USER'

export function getPlayers() {
  return {
    type: 'LOAD_PLAYERS',
  }
}

// export function loadUser(username) {
//   return {
//     type: LOAD_USER,
//     username: username
//   }
// }


export function session(username) {
  return {
    type: LOAD_USER,
    username: username
  }
}
