import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { settings } from "../ResponsiveSetting";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3 className="err-msg">{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        {console.log(shows.Error)}
        <h3 className="err-msg">{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {" "}
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {" "}
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

//   const {movies, shows} = useSelector(state=> state.movies);

//   let renderMovies,renderShows = "" ;

//   renderMovies =
//     (Array.isArray(movies.data) &&  movies.data.length > 0) ? (
//       movies.data.map((movie, index) => (
//         <MovieCard key={index} data={movie} />
//       ))
//     ) : (
//       <div className="movies-error">
//         <h3>{movies.error}</h3>
//       </div>
//     );

//   renderShows =
//   (Array.isArray(shows.data) &&  shows.data.length > 0) ? (
//       shows.data.map((movie, index) => (
//         <MovieCard key={index} data={movie} />
//       ))
//     ) : (
//       <div className="shows-error">
//         <h3>{shows.error}</h3>
//       </div>
//     );

//   useEffect(()=>{
//     if(movies.error){
//       console.log("movie error----")
//       alert(movies.error)
//     }
//     if(shows.error){
//       alert(shows.error)
//     }
//   },[movies.error, shows.error])

//   return (
//     <div className="movie-wraper">
//       {movies.loading && <p style={{color:'white'}}>Movies Loading........</p>}
//       <div className="movie-list">
//         <h2>Movies</h2>
//         <div className="movie-container">{renderMovies}</div>
//       </div>
//       {shows.loading && <p style={{color:'white'}}>Shows Loading........</p>}
//       <div className="show-list">
//         <h2 >Shows</h2>
//         <div className="movie-container">{renderShows}</div>
//       </div>
//     </div>
//   );
// };

export default MovieListing;
