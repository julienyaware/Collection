import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({title, onAdd , showAdd}) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red': 'blue'}text={showAdd ? 'Close': 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "My Book Collection"
};


export default Header;
