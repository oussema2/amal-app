import React from "react";

const Column = (props) => {
  return (
    <div
      className={`${props.classes}`}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {props.children}
    </div>
  );
};

export default Column;
