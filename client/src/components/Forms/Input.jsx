import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col w-auto mb-5">
      <label className="text-center text-xl w-max mb-3 mt-3" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="h-10 w-full border rounded-lg p-2 hover:bg-inputColorHover"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
