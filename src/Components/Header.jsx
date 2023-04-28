import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import hamburger from "../images/hamburger.png";
import inboxIcon from "../images/inbox.png";
import trashIcon from "../images/trash.png";
import spamIcon from "../images/spam.png";

export default function Header() {
  const [isClicked, setClicked] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive ? "header-link active-link" : "header-link";

  const clickHandler = () => setClicked(!isClicked);

  return (
    <nav className="header">
      <button className="hamburger" onClick={clickHandler}>
        {isClicked ? "X" : <img src={hamburger} width="10px" alt="..." />}
      </button>
      <h1>
        <span style={{ color: "white", background: "red", padding: "2px" }}>
          T
        </span>
        -mail
      </h1>
      <div className={isClicked ? "side-Ham" : "hamburger-none"}>
        <NavLink to="/" className={activeClass}>
          <img
            src={inboxIcon}
            alt="inbox"
            width="20px"
            style={{ marginRight: "20px" }}
          />
          Inbox
        </NavLink>
        <NavLink to="/trash" className={activeClass}>
          <img
            src={trashIcon}
            alt="inbox"
            width="20px"
            style={{ marginRight: "20px" }}
          />
          Trash
        </NavLink>
        <NavLink to="/spam" className={activeClass}>
          <img
            src={spamIcon}
            alt="inbox"
            width="20px"
            style={{ marginRight: "20px" }}
          />
          Spam
        </NavLink>
      </div>
    </nav>
  );
}
