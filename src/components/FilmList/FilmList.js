import React from 'react';

const FilmList = (props) => {
    
    return (
        <ul>
            {props.films.map(item => (
                <li key={item.id} id={item.id}>
                    <div>
                        {item.Title}
                    </div>
                    <div>
                        {item.Year}
                    </div>
                    <div>

                    </div>
                </li>
            ))}
        </ul>
    );
}

export default FilmList;
