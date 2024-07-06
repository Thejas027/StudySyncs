import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav className="navbar">
      <img src="images/syncs-final.png" alt="logo" className="navbar__logo" />
      <ul className="nav__list">
        <li>
          <a href="#home">Home</a>
        </li>
        <img
          src="images/bookmark.png"
          alt="bookmark"
          className="login-icon icon-bookmark"
        />
        <img
          src="images/download.png"
          alt="download"
          className="login-icon icon-download"
        />
        <img src="images/user-2.jpg" alt="Login" className="login-image" />
        <p className="nav--name">Zoya</p>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <>
      <div className="main--content">
        <div className="side-bar">
          {" "}
          <ul className="sidebar-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
        <div className="background">
          <div className="bg--content">
            <div>
              <img
                src="./images/background.jpeg"
                alt="background_img"
                className="bg--img"
              ></img>
              <p className="bg--text">
                Jss Science and Technology University, Mysuru
              </p>
            </div>

            <div>
              <div className="boxes">
                <div className="box-1">
                  <ul className="course--list">
                    <p className="course--name">Courses Offered</p>
                    <li className="course--item">1.Computer Science</li>
                    <li className="course--item">2.Information Science</li>
                    <li className="course--item">
                      3.Electronics and Communication{" "}
                    </li>
                    <li className="course--item">
                      4.Electrical and Instrumental
                    </li>
                    <li className="course--item">5.Civil Engineering</li>
                  </ul>
                </div>
                <div className="box-2">
                  <p className="content-2--text">
                    "At our college, we foster innovation, academic excellence,
                    and community engagement, preparing students for successful,
                    impactful futures."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return <footer></footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
