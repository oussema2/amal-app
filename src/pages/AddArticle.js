import React from "react";
import SideNav from "../Components/molecules/SideNav";

const AddArticle = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideNav />
      <h1>write article</h1>
    </div>
  );
};

export default AddArticle;
