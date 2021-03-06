const SET_FILM = 'SET-FILM';
const UPLOAD_FILM = 'UPLOAD-FILM';
const UPLOAD_DETAIL = 'UPLOAD-DETAIL';
const SET_TITLE = 'SET-TITLE';
const GET_TOTAL = 'GET-TOTAL';
const NEXT_PAGE = 'NEXT-PAGE';

let initialState = {
    films: [],
    title: '',
    total: 0,
    pageCurrent: 1
};

const filmReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_FILM : {  
            return {
                ...state,
                films: (action.film !== undefined) ? action.film : [],
                pageCurrent: 1
            };
        }

        case UPLOAD_FILM : {  
            return {
                ...state,
                films: (action.films !== undefined) ? state.films.concat(action.films) : []
            };
        }

        case UPLOAD_DETAIL : { 
            return {
                ...state,
                films: state.films.map(film => {
                    if (film.imdbID === action.film.imdbID) {
                        return action.film
                    }
                    return film;
                })
            };
        }

        case SET_TITLE : {  
            return {
                ...state,
                title: action.title
            };
        }

        case GET_TOTAL : { 
            return {
                ...state,
                total: action.total
            };
        }

        case NEXT_PAGE : {
            return {
                ...state,
                pageCurrent: ++action.pageCurrent
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
export const nextPage = (pageCurrent) => ({type: NEXT_PAGE, pageCurrent});
export const uploadFilm = (films) => ({type: UPLOAD_FILM, films});
export const uploadDetail = (film) => ({type: UPLOAD_DETAIL, film});

export default filmReducer;