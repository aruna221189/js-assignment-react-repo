import { takeLatest } from "redux-saga/effects";
import { FETCH_DATA } from "./constants";
import { handleFetchProducts } from "./handlers/products";

export function* watcherSaga() {
  yield takeLatest(FETCH_DATA, handleFetchProducts);
}
