import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideNav from "../Components/molecules/SideNav";
import { url } from "../path";

const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${url}/article/getArticleById/${id}`);
      console.log(response);
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideNav />
    </div>
  );
};

export default ArticleDetails;
