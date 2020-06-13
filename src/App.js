import React from 'react';
import './App.scss';
import FilmListContainer from './components/FilmList/FilmListContainer';
import SearchFormContainer from './components/SearchForm/SearchFormContainer';


const App = (props) => {
  return (
    <div className="App">
      <SearchFormContainer />
      <FilmListContainer />
    </div>
  )

}

export default App;