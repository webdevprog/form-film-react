import React from 'react';
import FilmList from './FilmList';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { getTotal, nextPage, uploadFilm} from '../../redux/film-reducers';


class FilmListContainer extends React.Component {

    onScrollList = (event) => {
        const scrollBottom = event.target.scrollTop + event.target.offsetHeight === event.target.scrollHeight;
          if (scrollBottom) {
            this.props.nextPage(this.props.pageCurrent);
            axios.get(`http://www.omdbapi.com/?s=${this.props.title}&page=${this.props.pageCurrent}&apikey=b04830ac`)
            .then(response => {
                this.props.uploadFilm(response.data.Search);
            }); 
          }
    }

    render() {
        
        return (
            <>
                <FilmList films={this.props.films} onScrollList={this.onScrollList} />
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        films: state.filmPage.films,
        title: state.filmPage.title,
        total: state.filmPage.total,
        pageCurrent: state.filmPage.pageCurrent,
    }

}

export default connect(mapStateToProps, {getTotal, nextPage, uploadFilm})(FilmListContainer);
