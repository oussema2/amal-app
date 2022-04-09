import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../Components/molecules/SideNav";
import UserContext from "../context/UserContext";
import { url } from "../path";

const MyArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const userData = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${url}/article/getArticlesById/${localStorage.getItem("id")}`
      );

      if (response.data.articles) {
        setArticles(response.data.articles);
      }
    })();
  }, []);
  console.log(userData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideNav />
      <div className="contentAceuillConainer">
        <div className="acceuillCartsContainer">
          {articles
            ? articles.map((item, index) => (
                <Link
                  key={index}
                  style={{
                    textDecoration: "none",
                  }}
                  to={`/c/articleDetails/${item.article?._id}`}
                >
                  <div className="carteHomeBotSideAceuill">
                    <div className="carteHomeLeftSideContainerAceuill">
                      <div className="carteHomeLeftSideContainerUser">
                        {" "}
                        <img
                          className="profileIconCarteHome"
                          style={{
                            width: 20,
                          }}
                          src="https://miro.medium.com/fit/c/40/40/1*F71jAKfEyTlhtq7wulI-mQ.png"
                          alt="this "
                        />
                        <p className="carteHomeUserName">{userData.fullName}</p>
                      </div>
                      <div>
                        <p className="carteHomeArticleTitleBotSide">
                          {item.title}
                        </p>
                        <p className="cartHomeBottomSideQuestion">
                          {item.articleBody.slice(0, 30)}...
                        </p>
                      </div>
                      <div>
                        <p className="carteHomeDate">Mar 30</p>
                      </div>
                    </div>
                    <div>
                      <img
                        className="carteAceuillImageArticle"
                        alt="dd"
                        src={`${url}/articleImages/${item.articleImage}`}
                      />
                    </div>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MyArticles;
