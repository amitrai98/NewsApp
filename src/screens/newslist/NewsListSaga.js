import { put, takeLatest } from "redux-saga/effects";
import * as types from "./NewsActions";

export function* handleGetNewsList(action) {
  yield put(types.getNewsList());
  //perform work logic
}

export function* watchGetNewsListRequest() {
  yield takeLatest(types.GET_NEWS_LIST, handleGetNewsList);
}
