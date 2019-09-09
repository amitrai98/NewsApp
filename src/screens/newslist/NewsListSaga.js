import { put, takeLatest } from "redux-saga/effects";
import * as types from "./NewsActions";
import ApiHandler from "../../networkhandler/ApiHandler";
import ApiConst from "../../networkhandler/ApiConst";

export function* handleGetNewsList(action) {
  yield put(types.getNewsListProgress());
  try {
    const instance = ApiHandler.getInstance(ApiConst.TOKEN);
    let response = yield instance.getNewsList(action.payload.since);
    if (response.response.status === 200) {
      yield put(types.getNewsListSuccess({ data: response.response.data }));
    } else {
      types.getNewsListFailure({ error: response });
    }
  } catch (error) {
    types.getNewsListFailure({ error: error });
  }
}

export function* watchGetNewsListRequest() {
  yield takeLatest(types.GET_NEWS_LIST, handleGetNewsList);
}
