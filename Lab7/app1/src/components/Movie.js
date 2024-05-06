import React from "react";
import "./Movie.css";

const ImageURL = 'https://image.tmdb.org/t/p/w500/';
const placeholderImage = 'https://raw.githubusercontent.com/mehmoodhamza819/Interactive-Design-System/main/Lab7/app1/public/logo192.png';

function Movie({poster_path,title,overview,vote_average})
{
    const ImageURLFinal=ImageURL+poster_path;
    const imageURLFinal = poster_path ? ImageURL + poster_path : placeholderImage;
    return(
<div className="movie">
    <img src={imageURLFinal}alt={title}></img>
    <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
    </div>
    <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
    </div>
</div>

    );
}



export default Movie;