import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingCount: 5
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

  }

  render() {
    return (
      <div className="rating" onClick={this.handleChange}>
        {this.state.ratingCount}
      </div>
    );
  }
}

export default Rating;
