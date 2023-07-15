import React from "react";
import { Routes,Route } from "react-router-dom";

import  './App.scss'
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";                                                                
import Footer from "./components/Footer/Footer";                                                                


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="container">
     <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/movie/:imdbID" Component={MovieDetails}/>
      <Route  Component={PageNotFound}/>
     </Routes>
     </div>
      <Footer/>
    </div>
  );
}

export default App;
