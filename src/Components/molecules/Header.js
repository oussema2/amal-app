import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

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
            Inno Teachers
          </Link>
        </div>

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
      </div>
    </div>
  );
};

export default Header;
