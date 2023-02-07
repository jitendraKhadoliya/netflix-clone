import React, { useEffect, useState } from "react";
import "./banner.css";
import axiosBaseURl from '../../axiosData/baseAxiosURl';
import requests from "../../axiosData/Request";

const Banner = () => {

  // here I will fetch the movie data from request file using axios for that i will create first states
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
      const fetchMovie = async ()=>{
        const requestedMovie = await axiosBaseURl.get(requests.fetchNetflixOriginals);
        // console.log(requestedMovie.data.results)
        // here i am setting up the movies to be random
        setMovies(
          requestedMovie.data.results[
              Math.floor(Math.random() * requestedMovie.data.results.length - 1)
          ]
          );
          return requestedMovie;
        }
        
        fetchMovie();
      },[])
      
      console.log(movies);




    // truncate the banner description
    const truncate = (string,cutFromThisChar)=>{
        return (
            // we are checking string length first and then if char is more than 150 wordcount then it will cut the rest string and show in last ... , otherwise it will show the normal string
            string?.length > cutFromThisChar ? string.substr(0 , cutFromThisChar-1) + '....' : string
        )
    }
    
  return (
    <header
      className="banner"
      // tmdb default image url is => https://image.tmdb.org/t/p/original
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
        objectFit:"contain",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movies?.title || movies.name || movies.original_title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
            {truncate(`${movies.overview}
            `,150)
            }
        </h1>
      </div>
      
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
