import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../Components/molecules/SideNav";
import { url } from "../path";
const Acceuill = (props) => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${url}/article/getArticles`);
      console.log(response.data.articles);
      if (response.data.articles) {
        setarticles(response.data.articles);
      }
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
                  {" "}
                  <div className="carteHomeBotSideAceuill">
                    <div className="carteHomeLeftSideContainerAceuill">
                      <div className="carteHomeLeftSideContainerUser">
                        {" "}
                        <img
                          className="profileIconCarteHome"
                          style={{
                            width: 20,
                          }}
                          src={`${url}/teacherImages/${item.teacher.profilePicture}`}
                          alt="this "
                        />
                        <p className="carteHomeUserName">
                          {item.teacher.fullName}
                        </p>
                      </div>
                      <div>
                        <p className="carteHomeArticleTitleBotSide">
                          {item.article.title}
                        </p>
                        <p className="cartHomeBottomSideQuestion">
                          {item.article.articleBody.slice(0, 30)}...
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
                        src={`${url}/articleImages/${item.article.articleImage}`}
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

export default Acceuill;
