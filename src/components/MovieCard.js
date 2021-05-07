import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import noImg from '../no-image.png';

export const MovieCard = ({movie}) => {
    //access to add movie action
    const {addMovieToNominatelist, nominatelist} = useContext(GlobalContext);

    //check movie is already in the nominate list 
    let storedMovie = nominatelist.find(m => m.imdbID === movie.imdbID);

    //decide to disable movie button if movie already added
    const nominatelistDisabled = storedMovie ? true : false;

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.Poster === "N/A" ? (
                    <div className="no-image">
                    <img src={noImg} alt={`NO IMG`} width="150" height="200"/>
                    </div>
                ) : (
                    <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} width="150" height="200"/>
                )}
            </div>
            <div className="movie-info">
                <div className="movie-header">
                    <h3 className="movie-title">{movie.Title}</h3>
                    <h4 className="movie-year">{movie.Year ? movie.Year : "unknown"}</h4>
                </div>
                <div className="controls">
                    <button 
                        className="button-add" 
                        key={movie.imdbID} 
                        disabled={nominatelistDisabled}
                        onClick={() => nominatelist.length >= 5 ? alert("Your list already has 5 movies, remove some!") : addMovieToNominatelist(movie)}>
                        ADD
                    </button>
                </div>

            </div>
        </div>
    )
}