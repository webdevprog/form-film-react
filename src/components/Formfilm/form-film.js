import React, { Component } from 'react';
import FilmList from '../FilmList/film-list';

class FormFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      year: '',
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
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createOptionYear() {
    let option = [],
      yearStart = 1900,
      yearEnd = new Date().getFullYear();
      
    for (yearStart; yearStart <= yearEnd; yearStart++) {
      option.push(<option value={yearStart}>{yearStart}</option>);
    }
    return option;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    if (!this.state.name) {
      e.preventDefault();
      return false;
    }

    let film = {
      name: this.state.name,
      year: this.state.year
    }

    this.props.items.push(film);

    this.setState({
      name: '',
      year: '',
    });

    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form className="form-film" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Название фильма" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
          <select name="year" onChange={this.handleChange.bind(this)}>
            {this.createOptionYear()}
          </select>
          <select name="genre" onChange={this.handleChange.bind(this)}>
            {this.createOptionYear()}
          </select>
          <input type="submit" value="Отправить" />
        </form>
        <FilmList items={this.props.items} />
      </div>
    );
  }
}

export default FormFilm;
