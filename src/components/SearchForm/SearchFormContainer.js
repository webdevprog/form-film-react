import React from 'react';
import SearchForm from './SearchForm';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setTitle,  setFilm, getTotal} from '../../redux/film-reducers';


class SearchFormContainer extends React.Component {

    handleSubmit = (event) => {

        axios.get(`http://www.omdbapi.com/?s=${this.props.title}&plot=full&page=1&apikey=b04830ac`)
            .then(response => {
                this.props.setFilm(response.data.Search);
                this.props.getTotal(response.data.totalResults);
            });

        event.preventDefault();
    }

    handleChange = (event) => {
        this.props.setTitle(event.target.value);
    }

    render() {
        return (
            <>
                <SearchForm
                    submiteForm={this.handleSubmit}
                    setTitle={this.handleChange}
                    title={this.props.title}
                />
                <div>Result: {this.props.total}</div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        films: state.filmPage.films,
        title: state.filmPage.title,
        total: state.filmPage.total,
    }

}

export default connect(mapStateToProps, { setFilm, setTitle, getTotal })(SearchFormContainer);
