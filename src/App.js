import "./App.css";
import Header from "./Components/molecules/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./path";
import UserContext from "./context/UserContext";
import Acceuill from "./pages/Acceuill";
import MyArticles from "./pages/MyArticles";
import AddArticle from "./pages/AddArticle";
function App() {
  const [loginData, setLoginData] = useState({});
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginMessageResponse, setLoginMessageResponse] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [userData, setuserData] = useState({});
  const [registerInfo, setRegisterInfo] = useState({
    fullName: null,
    email: null,
    password: null,
    profilePicture: null,
  });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(e) {
    if (
      !e ||
      e.target.classList.contains("modalContainer") ||
      e.target.classList.contains("jj")
    ) {
      setIsOpen(false);
    }
  }

  function openSignUpModal() {
    setSignUpModal(true);
  }

  function closeSignUpModal(e) {
    if (
      e.target.classList.contains("modalContainer") ||
      e.target.classList.contains("jj")
    ) {
      setSignUpModal(false);
    }
  }
  const createOne = () => {
    setIsOpen(false);
    setSignUpModal(true);
  };

  const formChange = (e) => {
    const tochange = e.target.name;
    switch (tochange) {
      case "email":
        setRegisterInfo({ ...registerInfo, email: e.target.value });

        break;

      case "fullName":
        setRegisterInfo({ ...registerInfo, fullName: e.target.value });

        break;
      case "password":
        setRegisterInfo({ ...registerInfo, password: e.target.value });

        break;
      case "profilePicture":
        setRegisterInfo({ ...registerInfo, profilePicture: e.target.files[0] });

        break;

      default:
        break;
    }
  };
  const loginFormChange = (e) => {
    setLoginMessageResponse(null);
    const tochange = e.target.name;
    switch (tochange) {
      case "email":
        setLoginData({ ...loginData, email: e.target.value });

        break;

      case "password":
        setLoginData({ ...loginData, password: e.target.value });

        break;

      default:
        break;
    }
  };
  console.log(loginData);
  const submitRegister = (e) => {
    e.preventDefault();
    const teacherData = new FormData();
    teacherData.append("fullName", registerInfo.fullName);
    teacherData.append("email", registerInfo.email);
    teacherData.append("password", registerInfo.password);
    teacherData.append("profilePicture", registerInfo.profilePicture);
    (async () => {
      const responseRegister = await axios.post(
        `${url}/teacher/auth/register`,
        teacherData,
        {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      );
      console.log(responseRegister);
      if (responseRegister.data.status === 200) {
        const teacher = responseRegister.data.teacher;
        setuserData(teacher);
        localStorage.setItem("id", teacher._id);
        setSignUpModal(false);
      }
    })();
  };

  const signIn = async () => {
    if (!loginData.email) {
      setLoginMessageResponse("Enter your Email");
      return;
    }
    if (!loginData.password) {
      setLoginMessageResponse("Enter you Password");
      return;
    }
    document.body.style.cursor = "wait";
    const response = await axios.post(`${url}/teacher/auth/login`, loginData);
    console.log(response.data);
    if (response.data.message) {
      document.body.style.cursor = "default";

      setLoginMessageResponse(response.data.message);
      return;
    }
    if (response.data.teacher) {
      setuserData(response.data.teacher);
      document.body.style.cursor = "default";
      localStorage.setItem("id", response.data.teacher._id);
      closeModal();
      return;
    }
    console.log(response);
  };
  useEffect(() => {
    (async () => {
      const id = localStorage.getItem("id");
      if (id) {
        console.log("entered");
        const response = await axios.get(`${url}/teacher/getTeacher/${id}`);
        if (response.status === 200) {
          const teacher = response.data.teacher;
          setuserData(teacher);
        }
      }
    })();
  }, []);

  const login = (teacher) => {
    setuserData(teacher);
  };
  const logout = () => {
    setuserData({});
    localStorage.removeItem("id");
  };

  return (
    <div className="App">
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home openModal={openModal}>
                  {" "}
                  <Header
                    openModal={openModal}
                    openSignUpModal={openSignUpModal}
                    logout={logout}
                    setuserData={(data) => setuserData(data)}
                    login={login}
                  />
                </Home>
              }
            ></Route>
            <Route path="/c" element={<Acceuill />} />
            <Route path="/c/myArticles" element={<MyArticles />} />
            <Route path="/c/writeArticle" element={<AddArticle />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>

      {modalIsOpen ? (
        <div onClick={(e) => closeModal(e)} className="modalContainer">
          <div className="modal">
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
                <p className="titleModal">Welcome back.</p>
                {loginMessageResponse ? (
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      fontSize: "18px",
                    }}
                  >
                    {loginMessageResponse}
                  </p>
                ) : null}
                <form onChange={(e) => loginFormChange(e)}>
                  <div className="inputContainer">
                    <input
                      type="text"
                      name="email"
                      className="login inputSignIn"
                      placeholder="Email."
                    />
                  </div>
                  <div className="inputContainer">
                    <input
                      name="password"
                      type="password"
                      className="login inputSignIn"
                      placeholder="Password."
                    />
                  </div>
                  <button onClick={signIn} type="button" className="submitBtn">
                    Sign In
                  </button>
                </form>

                <div>
                  <p>
                    No account?{" "}
                    <b onClick={createOne} className="spanText">
                      Create one
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {signUpModal ? (
        <div onClick={(e) => closeSignUpModal(e)} className="modalContainer">
          <div className="modal">
            <div className="closeIconModal">
              <svg className="jj" width="29" height="29">
                <path
                  className="closeIconContent"
                  onClick={(e) => closeSignUpModal(e)}
                  d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="modalContainerContent">
              <div className="modalContent">
                <p className="titleModal">Join Teacher's.</p>
                <form
                  onSubmit={(e) => submitRegister(e)}
                  onChange={(e) => formChange(e)}
                >
                  <div className="inputContainer">
                    <input
                      name="email"
                      type="email"
                      className="login inputSignIn"
                      placeholder="Email."
                    />
                  </div>
                  <div className="inputContainer">
                    <input
                      name="fullName"
                      type="text"
                      className="login inputSignIn"
                      placeholder="Full name."
                    />
                  </div>

                  <div className="inputContainer">
                    <input
                      name="password"
                      type="password"
                      className="login inputSignIn"
                      placeholder="Password."
                    />
                  </div>
                  <div className="inputContainer">
                    <input
                      name="confirmPassword"
                      type="password"
                      className="login inputSignIn"
                      placeholder="Confirm Password."
                    />
                  </div>
                  <div className="inputContainer">
                    <label class="file">
                      <input
                        name="profilePicture"
                        type="file"
                        id="file"
                        accept="image/*"
                        aria-label="File browser example"
                      />
                      <span class="file-custom"></span>
                    </label>
                  </div>
                  <button type="submit" className="submitBtn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
