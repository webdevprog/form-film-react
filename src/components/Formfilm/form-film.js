import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FilmForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Название фильма</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="genre">Жанр</label>
        <Field name="genre" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="year">Год выпуска</label>
        <Field name="year" component="input" min="1900" max="2099" step="1" placeholder="2020" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  form: 'film',
  initialValues: {
    year: 2020
  }
})(FilmForm);
