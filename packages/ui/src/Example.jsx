import React from 'react';

const Example = ({text}) => <div>{text}</div>;

Example.defaultProps = {
  text: "Lorem, ipsum."
}

export default Example;
