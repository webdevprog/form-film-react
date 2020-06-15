import React from 'react';
import style from './formList.module.scss';
import placeholder from '../../img/poster-placeholder.png';

const FilmList = (props) => {
    return (
        <div className={style.filmList} onScroll={props.onScrollList}>
            { (props.films.length > 1) ? props.films.map(item => (
                <div key={item.id} id={item.id}>
                    <div>
                        <img src={item.Poster === 'N/A' ? placeholder : item.Poster} alt={item.Title} />
                    </div>
                    <div>
                        {item.Title}
                    </div>
                    <div>
                        {item.Year}
                    </div>
                </div>
            )) : 'Not found film'}
        </div>
    );
}

export default FilmList;
