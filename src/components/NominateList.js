import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { NominatMovieCard } from './NominatMovieCard';

export const NominateList = () => {
    const {nominatelist} = useContext(GlobalContext);

    return (
        <div className="nominated-list">
            <div className="nominated-list-header">
                <h2>My Nominate List</h2>
            </div>

            {nominatelist.length > 0 ? (
                <div className="nominated-movie">
                    {nominatelist.map((movie) => (
                        <div className="nominate-movie-card-list" key={movie.imdbID}>
                        <NominatMovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            ) : (
                <h3> Your list is empty, add a movie!</h3>
            )}

        </div>
    );
};
