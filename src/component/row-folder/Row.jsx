import React, { useEffect, useState } from "react";
import "./row.css";
import BaseAxiosURL from "../../axiosData/baseAxiosURl.js";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  // here I will fetch the data for all movies inside the useState
  // tmdb default image url is => https://image.tmdb.org/t/p/original
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestedMovie = await BaseAxiosURL.get(fetchUrl);
        setMovies(requestedMovie.data.results);
        return requestedMovie;
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* here printing movies on front end using map function */}
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
