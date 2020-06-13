import React from 'react';
import FilmList from './FilmList';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setFilm} from '../../redux/film-reducers';


class FilmListContainer extends React.Component {

    componentDidMount() {
        axios.get('http://www.omdbapi.com/?s=city&apikey=b04830ac')
            .then(response => {
                this.props.setFilm(response.data.Search);
        });
    }

    render() {

        return (
            <>
                <FilmList films={this.props.films} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        films: state.filmPage.films
    }

}

export default connect(mapStateToProps, {setFilm})(FilmListContainer);
