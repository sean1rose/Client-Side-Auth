// signin form (redux form)
// need to hook up this form to redux-router in index.js
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

// remember to hook up reduxForm to reducer in rootReducer

// using redux form -> wrap it w/ redux form helper (bottom of the file where we place field definitions)
class Signin extends Component {
  handleFormSubmit({ email, password}) {
    console.log(email, password);
    // need to do something to log user in...
  }
  
  render() {
    // these all come from redux-forms (this.props.handleSubmit, this.props.fields.email, this.props.fields.password)
    const { handleSubmit, fields: { email, password }} = this.props;
    // want to wire up properties to input fields
    // hook up email helper to email input {...email} below
    // hook up pw helper to helper input {...password} below
    // form needs to listen to onSubmit event -> pass in handleSubmit reduxForm helper -> pass into that callback that is ultimately called w/ the finalized form properties
      // callback function -> need to bind this

    return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

// redux form helper (config) (actual component) - gives us access to the properties (this.props.fields.email)
  // fields -> exact property names (there's a diff b/w 'username' and 'email') [our server is set up to accept 'email' field]
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
