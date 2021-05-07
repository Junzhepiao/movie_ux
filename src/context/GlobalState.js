// Store application data in global to let react componenets has 
// access to the stored data
import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

// Initial state - now grabs data from local storage, so the list saves after user leaves.
const initialState = {
    nominatelist: localStorage.getItem('nominatelist') ? JSON.parse(localStorage.getItem('nominatelist')) : []
};

// Create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        //localstorage has to be store string , so convert movie array to string then store
        localStorage.setItem('nominatelist', JSON.stringify(state.nominatelist))
    }, [state]);

    // actions
    const addMovieToNominatelist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_NOMINATELIST", payload: movie });
    };

    return (
        <GlobalContext.Provider value={{nominatelist: state.nominatelist, addMovieToNominatelist}}>
            {props.children}
        </GlobalContext.Provider>
    )
    
} 