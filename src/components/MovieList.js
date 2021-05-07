import React, { useState } from 'react';
import { MovieCard } from './MovieCard';

export const MovieList = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault(); //cancel default event behavior
        setQuery(e.target.value);

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1099d135&s=${e.target.value}`
        ).then((res) => res.json())
        .then((data) => {
            console.log(data.Search);
            if(!data.errors && data.Response === "True") {
                setResults(data.Search);
            } else {
                setResults([]);
            }
        })
    };

    return (
        <div className="main-div">
            <h2> Movie List</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Search for a movie" value={query} onChange={onChange} />
                </div>
                <div className="movie-list">
                    {results && results.length > 0 && (
                        <div className="movie-search-results">
                            {results.map((movie) => (
                            <div key={movie.imdbID}>
                                <MovieCard movie={movie} />
                            </div>
                            ))}
                        </div>
                    )}
                </div>
        </div>
    );
};
