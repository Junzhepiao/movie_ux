import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const NominatMovieCard = ({movie}) => {
    //access to remove movie action
    const { removeMovieFromNominatelist } = useContext(GlobalContext);

    return (
        <div className="nominate-movie-card">
            <div className="movie-poster">
                {movie.Poster ? (
                    <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} width="150" height="200"/>
                    ) : (
                    <div className="blank-poster">
                        <img src={``} alt={`${movie.Title} Poster`} width="150" height="200"/>
                    </div>
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
                        onClick={() => removeMovieFromNominatelist(movie.imdbID)}
                    >
                        REMOVE
                    </button>
                </div>
    
            </div>
        </div>
    )
}