import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./Wrapper.js";

const HeaderStyled = styled.header`
  background-color: #0e3fa9;
  margin-block-end: 2em;
  text-align: center;
`;

const HeaderLogoStyled = styled.img`
  inline-size: 200px;
  position: relative;
  inset-block-start: 20px;
  filter: drop-shadow(3px 3px 0 #f2a30c);
`;

class Header extends Component {
  render() {
    return HeaderStyled({
      children: Wrapper({
        children: HeaderLogoStyled({
          src: "./images/logo.png",
          alt: "Block Buster",
        }),
      }),
    });
  }
}

export default Header;
