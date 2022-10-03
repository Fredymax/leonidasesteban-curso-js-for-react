import { SET_FILTER, ADD_MOVIES, SEARCH_MOVIE } from "../actions/index.js";
import { moviesAsMap, getAllIds, getMostValuedIds, getLeastValuedIds } from "../normalize.js";

function filterByTitle(title, movies) {
  let list = [];
  movies.forEach((movie) => {
    if (movie.title.toLowerCase().includes(title.toLowerCase())) {
      list.push(movie.id);
    }
  });
  return list;
}

function findById(id, movieIds) {
  const parseId = +id;
  if (movieIds.includes(parseId)) {
    return [parseId];
  }
  return movieIds;
}

function searchMovie(query, movies, movieIds) {
  if (isNaN(query)) {
    return filterByTitle(query, movies);
  }
  return findById(query, movieIds);
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES: {
      let movieList = moviesAsMap(payload, state.movieList);
      let all = getAllIds(payload, state.list.all);
      let mostValued = getMostValuedIds(payload, state.list.mostValued);
      let leastValued = getLeastValuedIds(payload, state.list.leastValued);
      return {
        ...state,
        movieList,
        list: {
          ...state.list,
          all,
          mostValued,
          leastValued,
        },
      };
    }
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        filter: "search",
        list: {
          ...state.list,
          search: searchMovie(payload, state.movieList, state.list.all),
        },
      };
    default:
      return state;
  }
};

export default reducer;
