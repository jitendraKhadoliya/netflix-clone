// this is my api key
const API_key = "b985d47320d38941697410ea238a3cc7";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_networks=213`,
  // fetchNetflixOriginals : `/movie/popular?api_key=${API_key}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_key}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/discover/tv?api_key=b985d47320d38941697410ea238a3cc7&with_networks=123
