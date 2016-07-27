/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga'
import { put, call, fork, select } from 'redux-saga/effects'
import * as actions from '../actions'
import * as client from '../client'


function* loadPlayers() {
  const players = yield call(client.loadPlayers)
  yield put( actions.receivePlayers(players) )
}

function* joinPlayer(action) {
  const resp = yield call(client.joinPlayer, action.playerName)
  yield put( actions.session(resp.playerName) )
}

function* challengePlayer(action) {
  const resp = yield call(client.challengePlayer, action.playerName, action.username)
  yield put( actions.challengeID(resp) )
}

export default function *root() {
  //yield fork(loadPlayers)
  yield [
    takeEvery("JOIN_PLAYER", joinPlayer),
    takeEvery("LOAD_PLAYERS", loadPlayers),
    takeEvery("CHALLENGE_PLAYER", challengePlayer),
  ]
}
