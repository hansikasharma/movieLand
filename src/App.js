//'http://www.omdbapi.com/?i=tt3896198&apikey=b1f7db95'
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
const Movie1 ={"Title":"Italian Spiderman",
"Year":"2007",
"imdbID":"tt2705436",
"Type":"movie",
"Poster":"N/A"
}
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=b1f7db95";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
   <div className="app">
   <h1>MovieLand</h1>
   <div className="search">
   <input placeholder= "Search for movies"
   value= {searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
   <img src={SearchIcon} alt= "Search" onClick={()=> searchMovies(searchTerm)}/>
   </div>
   {
	   movies?.length>0?
	   (<div className="container">
	   
	   {movies.map((movie)=>(
	   <MovieCard movie={movie} />
	   ))}
	   </div>
	   ):
	   (
	<div className="Empty"><h2>No movies found</h2>
	</div>
	)
   }
  
   </div>
  
  );
};

export default App;
