import React from 'react';
import FilmList from './FilmList';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {uploadDetail, getTotal, nextPage, uploadFilm} from '../../redux/film-reducers';
import ShowMore from '../common/ShowMore/ShowMore';


class FilmListContainer extends React.Component {

    onShowMore = (event) => {
       this.props.nextPage(this.props.pageCurrent);  
       axios.get(`http://www.omdbapi.com/?s=${this.props.title}&page=${this.props.pageCurrent + 1}&type=movie&apikey=b04830ac`)
        .then(response => {
            this.props.uploadFilm(response.data.Search);
        });
    }

    onShowDetail = (idFilm) => {
        axios.get(`http://www.omdbapi.com/?i=${idFilm}&apikey=b04830ac`)
         .then(response => {
            this.props.uploadDetail(response.data)    
         });
     }

    render() {

        return (
            <>
                <FilmList films={this.props.films} onShowDetail={this.onShowDetail}  />
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

export default connect(mapStateToProps, {uploadDetail, getTotal, nextPage, uploadFilm})(FilmListContainer);
