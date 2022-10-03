import { Component } from "../lib/react/index.js";
import Form from "./Form.js";
import Input from "./Input.js";
import Button from "./Button.js";
import store from "../store.js";
import { SEARCH_MOVIE, SET_FILTER } from "../actions/index.js";

class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("title");
    if (query) {
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      });
    }
    return store.dispatch({
      type: SET_FILTER,
      payload: "all",
    });
  };
  render() {
    return Form({
      onSubmit: this.handleSubmit,
      children: [
        Input({
          placeholder: "Write your favorite movie",
          name: "title",
          type: "text",
        }),
        Button(null, "Search"),
      ],
    });
  }
}

export default Search;
