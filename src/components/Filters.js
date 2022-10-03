import { Component, createElement } from "../lib/react/index.js";
import Select from "./Select.js";
import store from "../store.js";
import { SET_FILTER } from "../actions/index.js";

class Filters extends Component {
  handleChange = ({ target }) => {
    store.dispatch({
      type: SET_FILTER,
      payload: target.value,
    });
  };
  render() {
    return Select({
      onChange: this.handleChange,
      id: "filter",
      children: [
        createElement("option", { value: "all" }, "All"),
        createElement("option", { value: "mostValued" }, "More Valued"),
        createElement("option", { value: "leastValued" }, "Least Valued"),
      ],
    });
  }
}

export default Filters;
