import React, { Component } from 'react';

class FilmList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.year}
                        </div>
                        <div>
                            {item.genreCurrent}
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default FilmList;
