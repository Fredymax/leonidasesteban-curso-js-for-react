import { Component, createElement } from "../lib/react/index.js";
import Wrapper from "./Wrapper.js";

class Actions extends Component {
  render() {
    const { children } = this.props;
    return Wrapper({
      children: createElement(
        "div",
        {
          class: "actions",
          children
        }
      ),
    });
  }
}

export default Actions;
