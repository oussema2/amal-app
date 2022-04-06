import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { url } from "../../path";

const Header = (props) => {
  console.log(props);
  const userData = useContext(UserContext);
  console.log(userData);

  return (
    <div>
      <div className="header">
        <div>
          {" "}
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            Teacher's
          </Link>
        </div>

        {userData.fullName ? (
          <div
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <p>{userData.fullName}</p>
            <img
              alt="this is pic"
              style={{
                width: 50,
                borderRadius: "50%",
              }}
              src={`${url}/images/${userData.profilePicture}`}
            />
            <img
              alt="this is pic"
              onClick={props.logout}
              style={{
                width: 25,
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
    </div>
  );
};

export default Header;
