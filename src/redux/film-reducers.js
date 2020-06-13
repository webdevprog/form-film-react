const SET_FILM = 'SET-FILM';
let initialState = {
    films: []
};
const filmReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILM : {  
                
            return {
                ...state,
                films: action.film
            };
        }
        default: {
            return state;
        }
    }
}

export const setFilm = (film) => ({type: SET_FILM, film});

export default filmReducer;