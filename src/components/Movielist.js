import React, { useState } from 'react';

export const Movielist = () => {

    const [query, setQuery] = useState("");

    const onChange = (e) => {
        e.preventDefault(); //cancel default event behavior
        setQuery(e.target.value);
        //fetch movie data from the OMDB API, with personal key from env.local - feel free to change to your own api key
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_KEY}&s=${e.target.value}`
        ).then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    };

    return (
        <div>
        <h1> Movie List</h1>
        <input type="text" placeholder="Search for a movie" value={query} onChange={onChange} />
        </div>
    );
};