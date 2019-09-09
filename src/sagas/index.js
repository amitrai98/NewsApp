import { all } from "redux-saga/effects";
import { watchGetNewsListRequest } from "../screens/newslist/NewsListSaga";
import { watchGetNewsDetailRequest } from "../screens/newsdetail/NewsDetailSaga";

export default function* rootSaga() {
  yield all([watchGetNewsListRequest(), watchGetNewsDetailRequest()]);
}
