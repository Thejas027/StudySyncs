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
      </ul>
    </nav>
  );
}

function Main() {
  return <main>Main content here</main>;
}

function Footer() {
  return <footer>Footer content here</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
