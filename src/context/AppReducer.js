export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_NOMINATELIST":
            return {
                ...state,
                nominatelist: [action.payload, ...state.nominatelist],
            }
        default:
            return state;
    }
}