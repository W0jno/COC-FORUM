import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </React.Fragment>
  );
};

export default Input;
