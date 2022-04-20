import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../Components/molecules/SideNav";
import UserContext from "../context/UserContext";
import { url } from "../path";

const MyArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const userData = useContext(UserContext);
  const [topics, setTopics] = useState([]);
  const location = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${url}/article/getArticlesById/${localStorage.getItem("id")}`
      );
      const responseTopics = await axios.get(`${url}/topic/getAllTopics`);
      if (responseTopics.data.topics) {
        setTopics(responseTopics.data.topics);
      }
      console.log(response);

      if (response.data.articles) {
        setArticles(response.data.articles);
      }
    })();
  }, []);
  console.log(articles);
  const getArticleByTopic = async (topic) => {
    const response = await axios.get(
      `${url}/article/getArticlesByTopic/${topic}`
    );
    if (response.data.articles) {
      setArticles(response.data.articles);
    }
  };
  const clickOnCart = (e, _id) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("categorieItemContainerInPost")) {
      getArticleByTopic(e.target.innerHTML);
    } else {
      location("/c/articleDetails/" + _id);
    }
  };
  console.log(userData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <SideNav />
      </div>
      <div
        style={{
          flex: 6,
        }}
      >
        <div className="contentAceuillConainer">
          <div className="acceuillCartsContainer">
            {articles
              ? articles.map((item, index) => (
                  <div
                    onClick={(e) => clickOnCart(e, item._id)}
                    className="carteHomeBotSideAceuill"
                  >
                    <div className="carteHomeLeftSideContainerAceuill">
                      <div className="carteHomeLeftSideContainerUser">
                        <img
                          className="profileIconCarteHome"
                          style={{
                            width: 20,
                          }}
                          src={`${url}/teacherImages/${userData?.profilePicture}`}
                          alt="this "
                        />
                        <p className="carteHomeUserName">
                          {userData.fullName} - {item.articleDate.slice(0, 10)}
                        </p>
                      </div>
                      <div
                        style={{
                          overflowWrap: "break-word",
                          // overflow-wrap: break-word;
                        }}
                      >
                        <p className="carteHomeArticleTitleBotSide">
                          {item.title}
                        </p>
                        <p
                          style={{
                            overflowWrap: "break-word",
                          }}
                          className="cartHomeBottomSideQuestion"
                        >
                          {item.articleBody.slice(0, 150)}...
                        </p>
                      </div>
                      <div className="topicInCarteCOntainer">
                        {item.topics
                          ? item.topics.map((topix) => (
                              <p className="categorieItemContainerInPost">
                                {topix}
                              </p>
                            ))
                          : null}
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
                ))
              : null}
          </div>
          <div className="aceuillContainerLeft">
            <div className="searchLeftSideContainer">
              <svg
                className="searchIconLeftSide"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="rgba(8, 8, 8, 1)"
              >
                <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path>
              </svg>
              <input
                className="searchInputLeftSide"
                placeholder="Search"
                type={"text"}
              />
            </div>
            <div className="topicsContainer">
              <p>
                <b>Recommended topics</b>
              </p>
              <div className="CategoriesITemsContainer">
                {topics
                  ? topics.map((topic) => (
                      <div className="categorieItemContainer">
                        <p>{topic.topicLabel}</p>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArticles;
