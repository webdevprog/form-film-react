import React from 'react';
import FilmList from './FilmList';
import { connect } from 'react-redux';


class FilmListContainer extends React.Component {

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

export default connect(mapStateToProps)(FilmListContainer);
