import React from "react";
import PropTypes from "prop-types";

const Example = ({ text }) => {
  console.log("EXAMPLE");
  return <div>{text}</div>;
};

Example.defaultProps = {
  text: "Lorem ipsum dolor sit amet."
};

Example.propTypes = {
  text: PropTypes.string
};
