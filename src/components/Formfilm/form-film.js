import React, { Component } from 'react';
import FilmList from '../FilmList/film-list';
import Rating from './Rating/rating';

class FormFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      year: '',
      genreCurrent: '',
      rating: 1,
      genre: [
        'аниме',
        'биографический',
        'боевик',
        'вестерн',
        'военный',
        'детектив',
        'детский',
        'документальный',
        'драма',
        'исторический',
        'кинокомикс',
        'комедия',
        'концерт',
        'короткометражный',
        'криминал',
        'мелодрама',
        'мистика',
        'музыка',
        'мультфильм',
        'мюзикл',
        'научный',
        'приключения',
        'реалити - шоу',
        'семейный',
        'спорт',
        'ток - шоу',
        'триллер',
        'ужасы',
        'фантастика',
        'фильм - нуар',
        'фэнтези',
        'эротика',
      ],
      years: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let yearStart = 1900,
      yearEnd = new Date().getFullYear(),
      years = [];

    for (yearStart; yearStart <= yearEnd; yearStart++) {
      years.push(yearStart)
    }

    this.setState({
      years: years
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    alert()
  }

  handleSubmit(e) {

    if (!this.state.name || !this.state.year || !this.state.genreCurrent) {
      e.preventDefault();
      return null;
    }

    let film = {
      name: this.state.name,
      year: this.state.year,
      genreCurrent: this.state.genreCurrent,
    }

    this.props.items.push(film);

    this.setState({
      name: '',
      year: '',
      genreCurrent: '',
    });

    e.target.reset();

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="form-film" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Название фильма" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
          <select name="year" value={this.state.year} onChange={this.handleChange.bind(this)}>
            <option value="" selected disabled>Выберете год выпуска</option>
            {
              this.state.years.map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))
            }
          </select>
          <select name="genreCurrent" value={this.state.genreCurrent} onChange={this.handleChange.bind(this)}>
            <option value="" selected disabled>Выберете жанр</option>
            {
              this.state.genre.map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))
            }
          </select>
          <Rating />
          <input type="submit" value="Отправить" />
        </form>
        <FilmList items={this.props.items} />
      </div>
    );
  }
}

export default FormFilm;
