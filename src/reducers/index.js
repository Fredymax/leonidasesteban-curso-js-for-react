import { SET_FILTER, ADD_MOVIE } from "../actions/index.js";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return state;
    case SET_FILTER:
      return state;
    default:
      return state;
  }
};

export default reducer;
