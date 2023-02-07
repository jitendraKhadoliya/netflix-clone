import React from 'react'
import requests from '../axiosData/Request'
import Banner from '../component/banner/Banner'
import NavBar from '../component/header/NavBar'

const HomeScreen = () => {
  return (
    <div>
        <NavBar />  

        <Banner />

        {/* Row component for all fetching */}
        <Row title="" fetchUrl = {requests.fetchNetflixOriginals} />
        <Row title="" fetchUrl = {requests.fetchTrending} />
        <Row title="" fetchUrl = {requests.fetchTopRated} />
        <Row title="" fetchUrl = {requests.fetchActionMovies} />
        <Row title="" fetchUrl = {requests.fetchComedyMovies} />
        <Row title="" fetchUrl = {requests.fetchHorrorMovies} />
        <Row title="" fetchUrl = {requests.fetchRomanceMovies} />
        <Row title="" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen