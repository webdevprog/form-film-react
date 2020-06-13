import React from 'react';
import style from './showMore.module.scss';

const ShowMore = (props) => {
    return (
        <div>
            { props.total ? 
                <div className={style.showMore} onClick={props.onShowMore}>Show More</div> 
            : ''}
        </div>
    );
}

export default ShowMore;
