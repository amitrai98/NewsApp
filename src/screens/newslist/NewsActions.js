// contants for getting news
export const GET_NEWS_LIST = "GET_NEWS_LIST";
export const GET_NEWS_LIST_INPROGRESS = "GET_NEWS_LIST_INPROGRESS";
export const GET_NEWS_LIST_SUCCESS = "GET_NEWS_LIST_SUCCESS";
export const GET_NEWS_LIST_FAILURE = "GET_NEWS_LIST_FAILURE";

export function getNewsList(payload) {
  return {
    type: GET_NEWS_LIST,
    payload: payload
  };
}

export function getNewsListProgress(payload) {
  return {
    type: GET_NEWS_LIST_INPROGRESS,
    payload: payload
  };
}

export function getNewsListSuccess(payload) {
  return {
    type: GET_NEWS_LIST_SUCCESS,
    payload: payload
  };
}
export function getNewsListFailure(payload) {
  return {
    type: GET_NEWS_LIST_FAILURE,
    payload: payload
  };
}
