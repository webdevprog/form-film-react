const ADD_FILM = 'ADD-FILM';

let initialState = {
    films: [
        {
            id: 1,
            name: 'Shrek',
            year: 2002,
            genre: 'Move'
        },
        {
            id: 2,
            name: 'Shrek 2',
            year: 2002,
            genre: 'Move'
        }
    ]
}

const filmReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FILM : {            
            return {
                ...state,
                films: [...state.films, {...action.film}]
            };
        }
        default: {
            return state;
        }
    }
}

export const addFilm = (film) => ({type: ADD_FILM, film});

export default filmReducer;