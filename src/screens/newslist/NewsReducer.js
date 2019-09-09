import * as types from "./NewsActions";

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {}
};

export default function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_NEWS_LIST_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true
      };
    case types.GET_NEWS_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.payload.data
      };
    case types.GET_NEWS_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.payload.error
      };
    default:
      return state;
  }
}
