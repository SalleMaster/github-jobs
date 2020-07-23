import axios from 'axios';
import { MAKE_REQUEST, GET_DATA, ERROR, UPDATE_HAS_NEXT_PAGE } from './types';

// GitHub URL
const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
// const BASE_URL = 'https://jobs.github.com/positions.json';

// Get jobs
export const getJobs = () => async (dispatch) => {
  dispatch({ type: MAKE_REQUEST });

  const cancelToken1 = axios.CancelToken.source();

  try {
    const res = await axios.get(BASE_URL);

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }

  return () => {
    cancelToken1.cancel();
  };
};
