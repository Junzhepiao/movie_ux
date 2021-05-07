import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

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
                        disabled={nominatelistDisabled}
                        onClick={() => addMovieToNominatelist(movie)}>
                        ADD
                    </button>
                </div>

            </div>
        </div>
    )
}