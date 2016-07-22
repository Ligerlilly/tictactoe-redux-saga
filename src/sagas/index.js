/* eslint-disable no-constant-condition */

import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from '../actions'


export function* loadPlayers() {
  yield put( actions.loadPlayers() )
  const players = yield call(client.loadPlayers)
  yield put( actions.receivePosts(players) )
}

export function* joinPlayers(playerName) {
  yield put( actions.joinPlayers(playerName) )
  const players = yield call(client.joinPlayers(playerName))
  yield put( actions.receivePosts(players) )
}

export default function* root() {
  yield fork(loadPlayers)
  yield fork(joinPlayers)
}
