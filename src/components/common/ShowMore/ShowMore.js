import React from 'react';
import style from './showMore.module.scss';

const ShowMore = (props) => {
    const totalPages = Math.ceil(props.total / 10);
    return (
        <div>
            {totalPages > 1 ?
                props.pageCurrent < totalPages ?
                    <div className={style.showMore} onClick={props.onShowMore}>Show More ({props.total - ((props.pageCurrent) * 10)})</div>
                    : 'Loading all items!'
                : ''
            }
        </div>
    );
}

export default ShowMore;
