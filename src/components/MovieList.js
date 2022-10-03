import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./Wrapper.js";
import MovieItem from "./MovieItem.js";
import store from "../store.js";
import ModelMovie from "../api.js";
import { ADD_MOVIES } from "../actions/index.js";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

export default class MovieList extends Component {
  state = {
    currentPage: 1,
  };

  async getMovies(page) {
    const { results } = await ModelMovie.movies({ page });
    store.dispatch({
      type: ADD_MOVIES,
      payload: results,
    });
  }

  handleOberver = ([entry]) => {
    const { isIntersecting } = entry;
    if (!isIntersecting) return;
    this.getMovies(this.state.currentPage);
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  componentDidMount() {
    let $target = document.querySelector("#intersecting");
    const observer = new IntersectionObserver(this.handleOberver);
    observer.observe($target);
    store.subscribe(() => {
      this.setState();
    });
  }
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
