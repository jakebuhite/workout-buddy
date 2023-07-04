import React from "react";
import "./style.css";

const Header = ({ content, ...rest }) => {
  return (
    <h1 {...rest}>{ content }</h1>
  );
};

export default Header;