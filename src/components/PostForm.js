import React from "react";
import { reduxForm, Field } from "redux-form";

const createInput = render => ({ input, meta, label }) => (
  <div className="FormField-input">
    <label>{ label }</label>
    {render(input)}
    {meta.error && meta.touched && <span className="FormField-error">{meta.error}</span>}
  </div>
);

const InputField = createInput(input => (
  <input {...input}></input>
));

const TextAreaField = createInput(input => (
  <textarea {...input}></textarea>
));

let PostForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={InputField} />
    <Field name="text" component={TextAreaField} />
    <button type="submit">Zapisz</button>
  </form>
);

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Brak tytulu!";
  }
  if (!values.text) {
    errors.text = "Brak tekstu!";
  }
  return errors;
}

PostForm = reduxForm({
  form: 'post',
  validate,
  onSubmit: values => console.log(values)
})(PostForm);

export { PostForm };
