import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "../../pages/navSide.css";
import { url } from "../../path";

const SideNav = () => {
  const userData = useContext(UserContext);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      {" "}
      <div className="sideNav">
        <div className="sideNavTop">
          <Link to={"/c"} style={{ textDecoration: "none", color: "black" }}>
            <p>Teachers</p>
          </Link>
        </div>
        <div className="sideNavMid">
          <Link to={"/c"} style={{ textDecoration: "none", color: "black" }}>
            {" "}
            {location.pathname !== "/c" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Home"
              >
                <path
                  d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Home"
              >
                <path
                  d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            )}
          </Link>
          <Link
            to={"/c/myArticles"}
            style={{ textDecoration: "none", color: "black" }}
          >
            {location.pathname === "/c/myArticles" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Stories"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 2.75c0-.41.34-.75.75-.75h14.5c.41 0 .75.34.75.75v18.5c0 .41-.34.75-.75.75H4.75a.75.75 0 0 1-.75-.75V2.75zM7 8.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 7c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM7 12c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 7 12z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Stories"
              >
                <path
                  d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M8 8.5h8M8 15.5h5M8 12h8"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
            )}
          </Link>
          <hr></hr>
        </div>
        <div className="sideNavBot">
          <Link
            to={"/c/writeArticle"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>
          </Link>
          {userData.fullName ? (
            <img
              style={{
                width: 30,
                borderRadius: "50%",
              }}
              alt="profile"
              src={`${url}/teacherImages/${userData.profilePicture}`}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
