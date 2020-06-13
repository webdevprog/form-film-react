import React from 'react';

const SearchForm = (props) => {
    return (
        <form action="" onSubmit={props.submiteForm}>
            <input type="text" value={props.title} onChange={props.setTitle}/>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
