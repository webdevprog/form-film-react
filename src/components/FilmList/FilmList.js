import React from 'react';
import style from './formList.module.scss';
import placeholder from '../../img/poster-placeholder.png';

const FilmList = (props) => {
    return (
        <div className={style.filmList} onScroll={props.onScrollList}>
            {(props.films.length >= 1) ? props.films.map(item => (
                <div key={item.imdbID} className={style.film} onMouseEnter={e => !item.Released ? props.onShowDetail(item.imdbID) : ''}>
                    <div className={style.card}>
                        <div className={`${style.face +' '+ style.front}`}>
                            <img src={item.Poster === 'N/A' ? placeholder : item.Poster} alt={item.Title} className={style.photo} />
                            <div className={style.title}>
                                <span className={style.title__text}>{item.Title}</span>
                            </div>
                        </div>
                        <div className={`${style.face +' '+ style.back}`}>
                            <div>
                                {item.Title}
                            </div>
                            <div>
                                {item.Year}
                            </div>
                            <div>
                                {item.Released}
                            </div>
                        </div>
                    </div>
                </div>
            )) : 'Not found film'}
        </div>
    );
}

export default FilmList;
