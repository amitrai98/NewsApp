import { all } from "redux-saga/effects";
import { watchGetNewsListRequest } from "../screens/newslist/NewsListSaga";

export default function* rootSaga() {
  yield all([watchGetNewsListRequest()]);
}
