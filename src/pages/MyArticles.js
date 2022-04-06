import React from "react";
import SideNav from "../Components/molecules/SideNav";

const MyArticles = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideNav />
      <h1>my articles</h1>
    </div>
  );
};

export default MyArticles;
