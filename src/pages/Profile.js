import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideNav from "../Components/molecules/SideNav";
import { url } from "../path";
import axios from "axios";

const Profile = () => {
  const [articles, setarticles] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [topics, setTopics] = useState([]);
  const location = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${url}/article/getArticlesByUser/${id}`
      );
      const responseTopics = await axios.get(`${url}/topic/getAllTopics`);
      if (responseTopics.data.topics) {
        setTopics(responseTopics.data.topics);
      }
      console.log(response.data.articles);

      if (response.data.articles) {
        setarticles(response.data.articles);
        setTeacher(response.data.teacher);
      }
    })();
  }, []);
  const getArticleByTopic = async (topic) => {
    const response = await axios.get(
      `${url}/article/getArticlesByUserAndTopics/${id}/${topic}`
    );
    if (response.data.articles) {
      setarticles(response.data.articles);
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
                          src={`${url}/teacherImages/${teacher.profilePicture}`}
                          alt="this "
                        />
                        <p className="carteHomeUserName">
                          {teacher.fullName} - {item.articleDate.slice(0, 10)}
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
                      <div
                        onClick={() => getArticleByTopic(topic.topicLabel)}
                        className="categorieItemContainer"
                      >
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

export default Profile;
