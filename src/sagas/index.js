/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga'
import { put, call, fork, select } from 'redux-saga/effects'
import * as actions from '../actions'
import * as client from '../client'


export function* loadPlayers() {
    debugger
  yield put( actions.loadPlayers() )
  const players = yield call(client.loadPlayers)
  debugger
  yield put( actions.loadPlayers(players) )
}

function* joinPlayer(action) {
  const resp = yield call(client.joinPlayer, action.playerName)
  yield put( actions.session(resp.playerName) )
}

export default function* root() {
  //yield fork(loadPlayers)
  yield* takeEvery("JOIN_PLAYER", joinPlayer)
}
