import React, {useState, useEffect} from 'react';
import axios from "./axios";
import requests from './requests';
import "./Banner.css"

function Banner() {

  const [movie,setMovie] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchTrending);
        setMovie(request.data.results[0]);
    }
    fetchData();
  },[])

  console.log(movie);

    return (
    <header 
        className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg")`,
            backgroungPosition: "center center"
        }}
    >
        
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie.title}</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{movie.overview}</h1>
        </div>
        <div className="banner--fadeBotton"></div>
    </header>
  )
}

export default Banner;