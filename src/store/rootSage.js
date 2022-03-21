import { takeLatest } from "redux-saga/effects";
import constants from './inventory/constants';
import { getItemsSaga } from './inventory/saga'

export default function* rootSaga() {
  yield takeLatest(
    constants.GET_ITEMS,
    getItemsSaga
  )
}