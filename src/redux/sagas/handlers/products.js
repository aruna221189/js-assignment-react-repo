import { call, put } from "redux-saga/effects";
import { setProducts } from "../../slices/productsSlice";
import { FETCH_DATA_FAILED } from "../constants";
import { requestGetProducts } from "../requests/products";

export function* handleFetchProducts() {
  try {
    const response = yield call(requestGetProducts);
    const { data } = response;

    yield put(setProducts(data));
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILED, error });
  }
}
