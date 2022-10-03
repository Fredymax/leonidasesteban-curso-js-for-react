import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "./Header.js";
import Actions from "./Actions.js";
import Search from "./Search.js";
import Filters from "./Filters.js";
import MovieList from "./MovieList.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [new Search(), new Filters()],
        }),
        new MovieList(),
      ],
    });
  }
}

export default App;
