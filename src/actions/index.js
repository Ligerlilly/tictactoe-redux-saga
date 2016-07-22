export const LOAD_PLAYERS = 'LOAD_PLAYERS'
export const JOIN_PLAYERS = 'JOIN_PLAYERS'

export function loadPlayers(players) {
  return {
    type: LOAD_PLAYERS,
    players: players,
  }
}
export function joinPlayers(playerName) {
  return {
    type: JOIN_PLAYERS,
    playerName: playerName,
  }
}
