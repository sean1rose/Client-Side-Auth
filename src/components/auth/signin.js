// signin form (redux form)
import React { Component } from 'react';
import { reduxForm } from 'redux-form';

// remember to hook up reduxForm to reducer in rootReducer

// using redux form -> wrap it w/ redux form helper (bottom of the file where we place field definitions)
class Signin extends Component {
  render() {
    return (
        <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

// helper (config) (actual component)
  // fields -> exact property names (there's a diff b/w 'username' and 'email') [our server is set up to accept 'email' field]
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);