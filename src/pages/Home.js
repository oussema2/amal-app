import React from "react";
const arr = [1, 1, 1, 1, 1, 1];
const Home = (props) => {
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
            src={`${process.env.PUBLIC_URL}/depositphotos_11389074-stock-photo-young-school-teachers.jpg`}
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
            class="io y"
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
          {arr.map((item, index) => (
            <div className="carteHomeMidSide">
              <div className="carteHomeRightSideContainer">
                {" "}
                <p className="carteHomeRightSideNumberArticle">0{index + 1}</p>
              </div>
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
                  <p className="carteHomeArticleTitle">
                    Will Smith, Chris Rock and What You’re Missing About That
                    Slap
                  </p>
                </div>
                <div>
                  <p className="carteHomeDate">Mar 30</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homeBottomSideContainer">
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
              className="articleImage"
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

export default Home;
