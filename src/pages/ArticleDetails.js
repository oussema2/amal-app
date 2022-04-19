import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideNav from "../Components/molecules/SideNav";
import UserContext from "../context/UserContext";
import { url } from "../path";

const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const [teacher, setTeacher] = useState({});
  const userData = useContext(UserContext);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${url}/article/getArticleById/${id}`);
      console.log(response.data);
      if (response.data.article) {
        setArticle(response.data.article);
        setTeacher(response.data.teacher);
      }
    })();
  }, []);

  console.log(article, teacher);
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
          <div className="acceuillCartsContainerArticleDetails">
            <div className="headerUserInArticleDetails">
              <div className="imageContainer">
                <img
                  className="imageUserArticleDetail"
                  src={`${url}/teacherImages/${teacher?.profilePicture}`}
                  alt="dd"
                />
              </div>
              <div className="userDataCOntainerInArticleDetails">
                <div>{teacher?.fullName}</div>
                <div> {article?.articleDate?.slice(0, 10)}</div>
              </div>
            </div>

            <img
              src={`${url}/articleImages/${article?.articleImage}`}
              className="articleImageArticleDetail"
            />

            <h1 className="articleTitleArticleDetail">{article?.title}</h1>

            <p className="articleBody">{article?.articleBody}</p>
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
            <div className="articleOwnerDetails">
              <img
                className="articleOwnerImage"
                src={`${url}/teacherImages/${teacher?.profilePicture}`}
              />
              <b className="articleOwnerName">{teacher?.fullName}</b>
              <p className="articleOwnerBio">{teacher?.bio}</p>
              <Link
                className="visitProfileOwner"
                to={`/c/profile/${teacher?._id}`}
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
