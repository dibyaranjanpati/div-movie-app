import React from "react";
import { Link } from "react-router-dom";
import userImage from "../../images/user-image.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">Div Movie App</div>
      </Link>
      <div className="user-image">
        <img src={userImage} alt="userImage" />
      </div>
    </div>
  );
};

export default Header;
