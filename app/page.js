"use client";

import Link from "next/link";
import { NavBar } from "./components/NavBar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "./components/Movie";
import movies from "./data/movies.json";
//import Link from "next/link";

// async function getMovies(event) {
//   event.preventDefault();

//   const input = event.target;

//   const movieTitle = input.querySelector("input").value;
//   console.log(movieTitle);
//   const convertMovieTitle = movieTitle.trim().split(" ").join("+");

//   const res = await fetch(
//     `http://www.omdbapi.com/?t=${convertMovieTitle}&apikey=b615f6f4`
//   );
//   const data = await res.json();

//   console.log(data);
// }

export default function Home() {
  const [movieTitle, setMovieTitle] = useState();
  const [dataMovie, setDataMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = () => {
      console.log(movieTitle);

      if (!movieTitle) {
        return;
      }

      fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=b615f6f4`)
        .then((res) => {
          console.log("res");
          return res.json();
        })
        .then((data) => setDataMovie(data));
    };

    fetchMovie();
  }, [movieTitle]);

  function getMovieTitle(event) {
    event.preventDefault();

    const input = event.target;

    const movieTitle = input.querySelector("input").value;
    const convertMovieTitle = movieTitle.trim().split(" ").join("+");
    console.log(convertMovieTitle);

    setMovieTitle(convertMovieTitle);
  }

  return (
    <main>
      <form className="search" onSubmit={getMovieTitle}>
        <input name="query" type="search" />
        <button>search</button>
      </form>
      {/* {movie ? (
        <img src={movie.Poster} alt="poster" width={500} height={500} />
      ) : undefined} */}

      {dataMovie && <Movie movieData={dataMovie} />}
    </main>
  );
}
