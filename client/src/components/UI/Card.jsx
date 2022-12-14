import React from "react";

const Card = (props) => {
  return (
    <div
      className={`xsm:rounded-none lg:rounded-large md:rounded-large shadow-card-shadow ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
