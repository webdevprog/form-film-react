import React from 'react';
import FilmList from './FilmList';
import { connect } from 'react-redux';
import FilmForm from '../Formfilm/form-film';
import {addFilm} from '../../redux/film-reducers';

class FilmListContainer extends React.Component {

    onAddFilm = (values) => {
        this.props.addFilm(values);
        this.clearFields()
    }

    render() {
        return (
            <>
                <FilmForm onSubmit={this.onAddFilm} />
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

export default connect(mapStateToProps, {addFilm})(FilmListContainer);
