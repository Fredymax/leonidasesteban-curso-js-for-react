import { Component, createElement } from "../lib/react/index.js";
import Form from "./Form.js";
import Input from "./Input.js";
import Button from "./Button.js";

class Search extends Component {
  render() {
    return Form({
      children: [
        Input({
          placeholder: "Write your favorite movie",
          name: "title",
          type: "text",
        }),
        Button(null, "Search")
      ],
    });
  }
}

export default Search;
