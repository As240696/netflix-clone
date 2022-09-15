import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
    <Nav />
      <Banner />
      <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
