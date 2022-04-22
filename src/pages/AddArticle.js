import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { url } from "../path";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./addArticle.css";

const AddArticle = (props) => {
  const userData = useContext(UserContext);
  const [article, setArticle] = useState({});
  const [topics, setTopics] = useState([]);
  const [AddedTopics, setAddedTopics] = useState([]);
  const [autoCompleteShown, setautoCompleteShown] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function closeModal(e) {
    if (
      !e ||
      e.target.classList.contains("modalContainer") ||
      e.target.classList.contains("jj")
    ) {
      setIsOpen(false);
    }
  }

  const openModal = () => {
    if (!article.title || !article.articleBody || !article.articleImage) {
      return;
    }
    setIsOpen(true);
  };

  const addArticleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setArticle({ ...article, title: e.target.value });
        break;
      case "articleBody":
        setArticle({ ...article, articleBody: e.target.value });
        break;
      case "articleImage":
        setArticle({ ...article, articleImage: e.target.files[0] });

        break;

      default:
        break;
    }
  };

  const searcTopics = async (e) => {
    setautoCompleteShown(true);
    if (e.target.value) {
      const responseSearch = await axios.get(
        `${url}/topic/searchTopic/${e.target.value}`
      );
      if (responseSearch.data.topics.length > 0) {
        setTopics(responseSearch.data.topics);
      }
    } else {
      setTopics([]);
    }
  };
  console.log(topics);
  const addArticle = async () => {
    const date = new Date();

    const data = new FormData();
    data.set("title", article.title);
    data.set("articleBody", article.articleBody);
    data.set("articleImage", article.articleImage);
    data.set("userId", userData._id);
    data.set("topics", AddedTopics.join(","));
    data.set("articleDate", date);

    const response = await axios.post(`${url}/article/addArticle`, data);
    console.log(response.data.message);
    if (response.data.message === "added") {
      console.log(response.data);
      window.location.pathname = "/c";
    }
  };
  const addToAddedTopics = (e) => {
    const addedTopicsX = AddedTopics.filter(
      (item) => item === e.target.innerHTML
    );
    console.log(addedTopicsX);
    if (addedTopicsX.length === 0) {
      setAddedTopics([...AddedTopics, e.target.innerHTML]);
    }
  };
  const clickOnModalBody = (e) => {
    if (
      !e.target.classList.contains("topiText") &&
      !e.target.classList.contains("addTopicsInputInModal")
    ) {
      setautoCompleteShown(false);
    }
  };
  const deleteAddecTOpic = (e) => {
    setAddedTopics(AddedTopics.filter((item) => item !== e));
  };
  return (
    <div>
      <div className="addArticleHeader">
        <div>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/c"}>
            <p>Inno Teachers</p>
          </Link>
        </div>
        {userData.fullName ? (
          <div className="rightSideAddArticleHeader">
            <div onClick={() => openModal()} className="publishBtnHeader">
              <p>Publish</p>
            </div>

            <img
              alt="profile pic"
              className="addArticleHeaderProfilePic"
              src={`${url}/teacherImages/${userData.profilePicture}`}
            />
            <img
              alt="logoutIcon"
              onClick={(e) => props.logout()}
              style={{
                width: 40,
                marginLeft: 25,
                cursor: "pointer",
              }}
              src={`${process.env.PUBLIC_URL}/logout.svg`}
            />
          </div>
        ) : (
          <div
            style={{
              width: "180px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

              alignItems: "center",
            }}
          >
            <p
              onClick={props.openModal}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {" "}
              Sign In
            </p>
            <div
              onClick={props.openSignUpModal}
              style={{
                backgroundColor: "black",
                borderRadius: "25px",
                color: "white",
                width: "110px",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
                height: "43px",
              }}
            >
              <p>Get Started</p>
            </div>
          </div>
        )}
      </div>
      <form onChange={(e) => addArticleChange(e)}>
        <div className="writingSection">
          <div className="titleSection">
            <p className="titleLabeAddArticle">Title</p>
            <input
              name="title"
              placeholder="Title"
              className="titleInputAddArticle"
              type={"text"}
            />
          </div>
          <div className="articleBodySection">
            <textarea
              name="articleBody"
              placeholder="Tell you Thoughts..."
              className="articleBodyAddArticle"
              cols={63}
              rows={50}
            />
          </div>

          <div className="addArticleImageContainer">
            <div className="addArticleImageWrapper">
              <div className="inputContainer">
                <label className="file">
                  <input
                    name="articleImage"
                    type="file"
                    id="file"
                    accept="image/*"
                  />
                  <span className="file-custom"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
      {modalIsOpen ? (
        <div
          onClick={(e) => {
            closeModal(e);
            if (autoCompleteShown) {
              setautoCompleteShown(false);
            }
          }}
          className="modalContainer"
        >
          <div onClick={(e) => clickOnModalBody(e)} className="modal">
            <div className="closeIconModal" onClick={(e) => closeModal(e)}>
              <svg className="jj" width="29" height="29">
                <path
                  d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="modalContainerContent">
              <div className="modalContent">
                <p className="articleOwnerInModel">
                  Publishing to : <b>{userData.fullName}</b>
                </p>
                <p>
                  Add or change tags (up to 5) so readers know what your story
                  is about
                </p>
                {AddedTopics.length > 0 ? (
                  <div className="addedTopicsCOntainer">
                    {AddedTopics.map((item) => (
                      <div className="addedTopicItemContainer">
                        <p>{item}</p>
                        <div
                          className="deleteAddedTopicIcon"
                          onClick={() => deleteAddecTOpic(item)}
                        >
                          <svg width="29" height="29">
                            <path
                              d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="addTopicCOntainerInModall">
                  <input
                    placeholder="Add Topic..."
                    className="addTopicsInputInModal"
                    type={"text"}
                    onChange={(e) => searcTopics(e)}
                  />
                  {autoCompleteShown && topics.length > 0 ? (
                    <div className="autoCompleteTopicContainer">
                      <div className="arrowAutoComplete" />
                      <div className="autoCompleteTopic">
                        {topics.map((topic) => (
                          <p
                            onClick={(e) => addToAddedTopics(e)}
                            className="topiText"
                          >
                            {topic.topicLabel ? topic.topicLabel : topic}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div onClick={addArticle} className="publishBtnHeader">
                  <p>Publish Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddArticle;
