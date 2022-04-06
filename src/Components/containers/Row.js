import React from "react";

const Row = (props) => {
  return (
    <div
      className={`${props.classes}`}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {props.children}
    </div>
  );
};

export default Row;
