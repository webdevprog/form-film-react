const SET_FILM = 'SET-FILM';
const SET_TITLE = 'SET-TITLE';
const GET_TOTAL = 'GET-TOTAL';

let initialState = {
    films: [],
    title: '',
    total: 0
};

const filmReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_FILM : {  
            return {
                ...state,
                films: (action.film !== undefined) ? action.film : []
            };
        }
        case SET_TITLE : {  
            return {
                ...state,
                title: action.title
            };
        }

        case GET_TOTAL : { 
            debugger 
            return {
                ...state,
                total: action.total
            };
        }
        default: {
            return state;
        }
    }
}

export const setFilm = (film) => ({type: SET_FILM, film});
export const setTitle = (title) => ({type: SET_TITLE, title});
export const getTotal = (total) => ({type: GET_TOTAL, total});

export default filmReducer;