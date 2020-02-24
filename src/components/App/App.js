import React, {Component} from 'react';
import FormFilm from '../Formfilm/form-film';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
  }
  render () {
    return (
      <div className="App">
        <FormFilm items={this.state.items} />
      </div>
    );
  }
}

export default App;
