import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

async function addAsync() {
  await delay(2000);
  await put({ type: 'ADD' });
}

async function mySaga() {
  await takeEvery('ADDASYNC', addAsync);
}

export default mySaga;
