import { put, takeLatest } from "redux-saga/effects";
import * as types from "./NewsDetailActions";

export function* handleGetNewsDetail(action) {
  yield put(types.getNewsDetailProgress());
  //perform work logic
}

export function* watchGetNewsDetailRequest() {
  yield takeLatest(types.GET_NEWS_DETAIL, handleGetNewsDetail);
}
