// contants for get news detail

export const GET_NEWS_DETAIL = "GET_NEWS_DETAIL";
export const GET_NEWS_DETAIL_INPROGRESS = "GET_NEWS_DETAIL_INPROGRESS";
export const GET_NEWS_DETAIL_SUCCESS = "GET_NEWS_DETAIL_SUCCESS";
export const GET_NEWS_DETAIL_FAILURE = "GET_NEWS_DETAIL_FAILURE";

export function getNewsDetail(payload) {
  return {
    type: GET_NEWS_DETAIL,
    payload: payload
  };
}

export function getNewsDetailProgress(payload) {
  return {
    type: GET_NEWS_DETAIL_INPROGRESS,
    payload: payload
  };
}

export function getNewsDetailSuccess(payload) {
  return {
    type: GET_NEWS_DETAIL_SUCCESS,
    payload: payload
  };
}
export function getNewsDetailFailure(payload) {
  return {
    type: GET_NEWS_DETAIL_FAILURE,
    payload: payload
  };
}
