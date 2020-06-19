import React from 'react';
import FilmList from './FilmList';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {getTotal, nextPage, uploadFilm} from '../../redux/film-reducers';
import ShowMore from '../common/ShowMore/ShowMore';


class FilmListContainer extends React.Component {

    onShowMore = (event) => {
       this.props.nextPage(this.props.pageCurrent);  
       axios.get(`http://www.omdbapi.com/?s=${this.props.title}&page=${this.props.pageCurrent + 1}&apikey=b04830ac`)
        .then(response => {
            this.props.uploadFilm(response.data.Search);
        });
    }

    render() {

        return (
            <>
                <FilmList films={this.props.films} />
                <ShowMore 
                    total={this.props.total}
                    pageCurrent={this.props.pageCurrent}
                    onShowMore={this.onShowMore} 
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        pageCurrent: state.filmPage.pageCurrent,
        films: state.filmPage.films,
        title: state.filmPage.title,
        total: state.filmPage.total,
        
    }

}

export default connect(mapStateToProps, {getTotal, nextPage, uploadFilm})(FilmListContainer);
