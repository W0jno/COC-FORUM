import React from "react";


const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`rounded-lg bg-btncolor hover:bg-btncolorHover w-32 h-3/5 ml-5 ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
