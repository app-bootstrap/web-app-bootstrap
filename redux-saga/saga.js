import { put, takeEvery } from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function * addAsync() {
  yield delay(2000);
  yield put({ type: 'ADD' });
}

function * mySaga() {
  yield takeEvery('ADDASYNC', addAsync);
}

export default mySaga;
