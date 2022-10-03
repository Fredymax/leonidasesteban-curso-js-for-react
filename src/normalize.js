const moviesAsMap = (newValue, oldValue = new Map()) =>
  newValue.reduce((acc, movie) => {
    acc.set(movie.id, movie);
    return acc;
  }, oldValue);

const getAllIds = (newValue, oldValue = []) => oldValue.concat(newValue.map((movie) => movie.id));

const getMostValuedIds = (newValue, oldValue = []) =>
  newValue.reduce((list, movie) => {
    if (movie.vote_average >= 7) {
      list.push(movie.id);
    }
    return list;
  }, oldValue);

const getLeastValuedIds = (newValue, oldValue = []) =>
  newValue.reduce((list, movie) => {
    if (movie.vote_average < 7) {
      list.push(movie.id);
    }
    return list;
  }, oldValue);

export { moviesAsMap, getAllIds, getMostValuedIds, getLeastValuedIds };
