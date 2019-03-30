import React from "react";
import { reduxForm, Field } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const createInput = render => ({ input, meta, label }) => (
  <div className="FormField-input">
    <label>{label}</label>
    {render(input)}
    {meta.error && meta.touched && (
      <span className="FormField-error">{meta.error}</span>
    )}
  </div>
);

const InputField = createInput(input => <input {...input} />);

const TextAreaField = createInput(input => <textarea {...input} />);

class PostForm extends React.Component {
  componentDidMount() {
    const { initialize, post } = this.props;
    initialize(post);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="title" component={InputField} />
        <Field name="text" component={TextAreaField} />
        <button type="submit">Zapisz{' '}<FontAwesomeIcon icon="save" /></button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Brak tytulu!";
  }
  if (!values.text) {
    errors.text = "Brak tekstu!";
  }
  return errors;
};

const onSubmit = (values, dispatch, { newPost, editPost, history, post }) => {
  post ? editPost(values) : newPost(values);
  history.push("/posts");
};

PostForm = reduxForm({
  form: "post",
  validate,
  onSubmit
})(PostForm);

export { PostForm };
