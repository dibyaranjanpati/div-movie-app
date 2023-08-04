import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImage from "../../images/user-image.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    e.preventDefault();
    // console.log(searchText);
    if (searchText === "") return setError(true);
    dispatch(fetchAsyncMovies(searchText));
    dispatch(fetchAsyncShows(searchText));
    setSearchText("");
  };
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">Div Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={searchHandler}>
          {/* {error && searchText.length === 0 ? (
            <input
              className="error-input"
              type="text"
              // value={"plese Enter Text First"}
              value={searchText}
              placeholder="Plese Enter Text First"
              onChange={(e) => setSearchText(e.target.value)}
            />
          ) : (
            <input
              type="text"
              value={searchText}
              placeholder="Search Movies And TV Shows"
              onChange={(e) => setSearchText(e.target.value)}
            />
          )} */}

          {/* in a short way */}

          <input
            type="text"
            value={searchText}
            placeholder={
              error && searchText.length === 0
                ? "Plese Enter Text First"
                : "Search Movies And TV Shows"
            }
            onChange={(e) => setSearchText(e.target.value)}
            className={error && searchText.length === 0 ? "error-input" : ""}
          />

          <button type="submit">
            Search
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={userImage} alt="userImage" />
      </div>
    </div>
  );
};

export default Header;
