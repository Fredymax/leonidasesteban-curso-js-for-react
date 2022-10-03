const moviesAsMap = (movies) =>
  movies.reduce((acc, movie) => {
    acc.set(movie.id, movie);
    return acc;
  }, new Map());

const getAllIds = (movies) => movies.map((movie) => movie.id);

const getMostValuedIds = (movies) =>
  movies.reduce((list, movie) => {
    if (movie.vote_average > 7) {
      list.push(movie.id);
    }
    return list;
  }, []);

const getLeastValuedIds = (movies) =>
  movies.reduce((list, movie) => {
    if (movie.vote_average <= 7) {
      list.push(movie.id);
    }
    return list;
  }, []);

export { moviesAsMap, getAllIds, getMostValuedIds, getLeastValuedIds };
