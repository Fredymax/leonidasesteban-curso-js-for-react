import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./Wrapper.js";
import MovieItem from "./MovieItem.js";
// import movies from "../data/movies.js";
import store from "../store.js";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

export default class MovieList extends Component {
  render() {
    const state = store.getState();
    const movieList = state.movieList;
    const filter_by = state.filter;
    const moviesFiltered = state.list[filter_by];
    return new Wrapper({
      children: MovieListStyled({
        children: moviesFiltered.map((movieId) => new MovieItem(movieList.get(movieId))),
      }),
    });
  }
}
