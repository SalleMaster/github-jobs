import {
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_HAS_NEXT_PAGE,
} from '../actions/types';

const initialState = {
  jobs: [],
  loading: true,
  error: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA:
      return {
        ...state,
        jobs: payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        jobs: null,
      };
    default:
      return state;
  }
}
