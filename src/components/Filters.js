import { Component, createElement } from "../lib/react/index.js";
import Select from "./Select.js";

{
  /*
  <select name="" id="filter">
    <option value="all">Todas</option>
    <option value="most-valued">Más valoradas</option>
    <option value="least-valued">Menos valoradas</option>
  </select>
*/
}
class Filters extends Component {
  render() {
    return Select({
      id: "filter",
      children: [
        createElement("option", { value: "all" }, "All"),
        createElement("option", { value: "moreValued" }, "More Valued"),
        createElement("option", { value: "leastValued" }, "Least Valued"),
      ],
    });
  }
}

export default Filters;
