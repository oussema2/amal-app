import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../path";
const arr = [1, 1, 1, 1, 1, 1];
const Home = (props) => {
  const [articlesTrends, setArticlesTrends] = useState([]);
  const [articlesRandom, setArticlesRandom] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${url}/article/getArticles`);
      if (response.data.articles) {
        setArticlesTrends(response.data.articles.slice(0, 6));
        setArticlesRandom(response.data.articles.slice(6));
      }
    })();
  }, []);

  return (
    <div>
      {props.children}
      <div className="homeTopSideContainer">
        <div className="homeTopSideLeft">
          <p className="titleHomeLeftSide">Stay curious.</p>
          <p className="descriptionHomeLeftSide">
            Discover stories, thinking, and expertise from writers on Teaching
            Topics.
          </p>
          <button onClick={props.openModal} className="startHomeLEftSide">
            Start Reading
          </button>
        </div>
        <div className="homeTopSideRight">
          <img
            className="imageHomePage"
            alt="home pic"
            src={`${process.env.PUBLIC_URL}/teachers-abbey-jc-201026.jpg`}
          />
        </div>
      </div>

      <div className="homeMidSIdeContainer">
        <div className="titleHimeMidSide">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            className="io y"
          >
            <path fill="#fff" d="M0 .8h28v28H0z"></path>
            <g opacity="0.8" clip-path="url(#trending_svg__clip0)">
              <path fill="#fff" d="M4 4.8h20v20H4z"></path>
              <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
              <path
                d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                stroke="#000"
                stroke-linecap="round"
              ></path>
            </g>
            <defs>
              <clipPath id="trending_svg__clip0">
                <path
                  fill="#fff"
                  transform="translate(4 4.8)"
                  d="M0 0h20v20H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
          <p className="homeMidSideTitle">TRENDING ON Teacher's</p>
        </div>
        <div className="carteHomeMidSideContainer">
          {articlesTrends.map((item, index) => (
            <Link
              style={{
                textDecoration: "none",
              }}
              to={`/c/articleDetails/${item.article._id}`}
            >
              <div className="carteHomeMidSide">
                <div className="carteHomeRightSideContainer">
                  {" "}
                  <p className="carteHomeRightSideNumberArticle">
                    0{index + 1}
                  </p>
                </div>
                <div className="carteHomeLeftSideContainer">
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
                    <p className="carteHomeUserName">{item.teacher.fullName}</p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                      className="carteHomeArticleTitle"
                    >
                      {item.article.title}
                    </p>
                    <p
                      style={{
                        color: "black",
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      {item.article.articleBody.slice(0, 50)}...
                    </p>
                  </div>
                  <div>
                    <p className="carteHomeDate">
                      {" "}
                      {item.article.articleDate.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="homeBottomSideContainer">
        {articlesRandom
          ? articlesRandom.map((item) => (
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={`/c/articleDetails/${item.article._id}`}
              >
                <div className="carteHomeBotSide">
                  <div className="carteHomeLeftSideContainer">
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
                        {item.article.articleBody.slice(0, 50)}...
                      </p>
                    </div>
                    <div>
                      <p className="carteHomeDate">
                        {item.article.articleDate.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="articleImage"
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
  );
};

export default Home;
