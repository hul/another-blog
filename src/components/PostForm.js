import React from "react";
import { reduxForm, Field } from "redux-form";

const createRenderer = render => ({ label, meta, input }) => (
  <div className="FormField">
    <label>{label}</label>
    {render(input)}
    {meta.error && meta.touched && (
      <span className="FormField-error">Error</span>
    )}
  </div>
);

const InputField = createRenderer(input => (
  <input className="FormField-input" {...input} />
));

const TextareaField = createRenderer(input => (
  <textarea className="FormField-input" {...input} />
));

class PostForm extends React.Component {
  componentDidMount() {
    this.props.post && this.props.initialize(this.props.post);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="title" component={InputField} label="Tytuł" />
        <Field name="text" component={TextareaField} label="Treść" />
        <button type="submit">Zapisz</button>
      </form>
    );
  }
}

const validate = (values, props) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Tytuł nie może być pusty!";
  }
  if (!values.text) {
    errors.text = "Treść nie może być pusta!!!";
  }
  return errors;
};

const onSubmit = (values, dispatch, props) => {
  console.log(props);

  props.post ? props.editPost(values) : props.newPost(values);
  props.history.push("/posts");
};

PostForm = reduxForm({
  form: "post",
  validate,
  onSubmit
})(PostForm);

export { PostForm };
