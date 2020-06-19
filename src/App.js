import React from 'react';
import './App.scss';
import FilmListContainer from './components/FilmList/FilmListContainer';
import SearchFormContainer from './components/SearchForm/SearchFormContainer';


const App = (props) => {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <SearchFormContainer />
        </div>
      </header>
      <div className="content">
        <div className="container">
          <FilmListContainer />
        </div>
      </div>
    </div>
  )

}

export default App;