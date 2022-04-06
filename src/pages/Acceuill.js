import React from "react";
import SideNav from "../Components/molecules/SideNav";
const Acceuill = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideNav />
      <div className="acceuillCartsContainer">
        <div className="carteHomeBotSide">
          <div className="carteHomeLeftSideContainer">
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
              <p className="carteHomeUserName">Oussema dabboussi</p>
            </div>
            <div>
              <p className="carteHomeArticleTitleBotSide">
                Will Smith, Chris Rock and What You’re Missing About That Slap
              </p>
              <p className="cartHomeBottomSideQuestion">
                What can a ski resort teach us about Ukraine and Russia?
              </p>
            </div>
            <div>
              <p className="carteHomeDate">Mar 30</p>
            </div>
          </div>
          <div>
            <img
              alt="dd"
              src="https://miro.medium.com/fit/c/200/134/1*tr-vfEXgfCHwnFmgnWSieg.jpeg"
            />
          </div>
        </div>
        <div className="carteHomeBotSide">
          <div className="carteHomeLeftSideContainer">
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
              <p className="carteHomeUserName">Oussema dabboussi</p>
            </div>
            <div>
              <p className="carteHomeArticleTitleBotSide">
                Will Smith, Chris Rock and What You’re Missing About That Slap
              </p>
              <p className="cartHomeBottomSideQuestion">
                What can a ski resort teach us about Ukraine and Russia?
              </p>
            </div>
            <div>
              <p className="carteHomeDate">Mar 30</p>
            </div>
          </div>
          <div>
            <img
              alt="dd"
              src="https://miro.medium.com/fit/c/200/134/1*tr-vfEXgfCHwnFmgnWSieg.jpeg"
            />
          </div>
        </div>
        <div className="carteHomeBotSide">
          <div className="carteHomeLeftSideContainer">
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
              <p className="carteHomeUserName">Oussema dabboussi</p>
            </div>
            <div>
              <p className="carteHomeArticleTitleBotSide">
                Will Smith, Chris Rock and What You’re Missing About That Slap
              </p>
              <p className="cartHomeBottomSideQuestion">
                What can a ski resort teach us about Ukraine and Russia?
              </p>
            </div>
            <div>
              <p className="carteHomeDate">Mar 30</p>
            </div>
          </div>
          <div>
            <img
              alt="dd"
              src="https://miro.medium.com/fit/c/200/134/1*tr-vfEXgfCHwnFmgnWSieg.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acceuill;
