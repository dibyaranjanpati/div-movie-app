import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import MovieApi from "../../comman/Apis/MovieApi";
// import {APIKey} from '../../comman/Apis/MovieApiKey'
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "harry";
  const showsText = "money";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showsText));
  }, [dispatch]);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAsyncMovies());
  //   dispatch(fetchAsyncShows());
  // }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
