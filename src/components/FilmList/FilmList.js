import React from 'react';

const FilmList = (props) => {
    return (
        <div>
            { (props.films.length > 1) ? props.films.map(item => (
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
            )) : 'Not found film'}
        </div>
    );
}

export default FilmList;
