import React, { UseState } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
// import { createStreams } from "../../store/actions";
import { streamCreate } from '../../store/actions';

const StreamCreate = props => {
  const renderInput = ({ input, label, meta }) => {
    console.log("meta", meta);
    return (
      <div>
        <label>{label}</label>
        <input
          autoComplete="off"
          className="form-control"
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
          {...input}
        />
        {renderError(meta)}
      </div>
    );
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="input-group">
          <div className="">{error}</div>
        </div>
      );
    }
  };

  const onSubmitHandler = saveFormValue => {
    props.streamCreate(saveFormValue);
  };

  return (
    <div className='container'>
      <form
        className="form-group"
        onSubmit={props.handleSubmit(onSubmitHandler)}
      >
        <Field name="title" component={renderInput} label="Enter the Name" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="btn btn-primary">submit</button>
      </form>
    </div>
  );
};

const validate = formValue => {
  const error = {};
  if (!formValue.title) error.title = "Enter valid Name";

  if (!formValue.description) error.description = "Enter valid Description";

  return error;
};

const reduxFormconnect = reduxForm({
  form: "StreamCreate",
  validate
})(StreamCreate);

export default connect(null, { streamCreate }) (reduxFormconnect)
