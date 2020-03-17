import React from 'react';

const FilmList = (props) => {
    return (
        <ul>
            {props.films.map(item => (
                <li key={item.id} id={item.id}>
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.year}
                    </div>
                    <div>
                        {item.genre}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default FilmList;
