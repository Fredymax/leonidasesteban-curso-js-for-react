import { createStore } from "./redux/index.js";
import reducer from "./reducers/index.js";
import movies from "./data/movies.js";
import { moviesAsMap, getAllIds, getMostValuedIds, getLeastValuedIds } from "./normalize.js";

const initialState = {
  movieList: moviesAsMap(movies),
  filter: "all",
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    leastValued: getLeastValuedIds(movies),
  },
};

const store = createStore(reducer, initialState);

export default store;
