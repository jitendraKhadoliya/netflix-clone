import React from "react";
import requests from "../axiosData/Request";
import Banner from "../component/banner/Banner";
import NavBar from "../component/header/NavBar";
import Row from "../component/row-folder/Row";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />

      <Banner />

      {/* Row component for all fetching */}
      {/* this one I want slightly bigger row */}
      <Row
        title="NetFlix Originals"
        fetchUrl={requests?.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests?.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests?.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests?.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests?.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests?.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests?.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests?.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
