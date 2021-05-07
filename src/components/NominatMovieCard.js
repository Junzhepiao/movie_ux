import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import noImg from '../no-image.png';

export const NominatMovieCard = ({movie}) => {
    //access to remove movie action
    const { removeMovieFromNominatelist } = useContext(GlobalContext);

    return (
        <div className="nominate-movie-card">
            <div className="nominate-movie-poster">
                {movie.Poster === "N/A" ? (
                    <div className="blank-poster">
                    <img src={noImg} alt={`${movie.Title} Poster`} width="150" height="200"/>
                </div>
                    ) : (
                    <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} width="150" height="200"/>
                    )}
            </div>
            <div className="nominate-movie-info">
                <div className="movie-header">
                    <h3 className="movie-title">{movie.Title}</h3>
                    <h4 className="movie-year">{movie.Year ? movie.Year : "unknown"}</h4>
                </div>
                <div className="controls">
                    <button 
                        className="button-remove" 
                        key={movie.imdbID} 
                        onClick={() => removeMovieFromNominatelist(movie.imdbID)}
                    >
                        REMOVE
                    </button>
                </div>
    
            </div>
        </div>
    )
}