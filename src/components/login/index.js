import React, {Component} from 'react';
import {firebase} from '../../firebase';
import FormField from "../ui/formField";
import {validate} from "../ui/misc";


class Login extends Component {

  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your Email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your Password'
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: ''
      }
    }
  };


  updateForm(element) {
    const newFormData = {...this.state.formData};
    const newElement = {...newFormData[element.id]};

    newElement.value = element.event.target.value;

    let validationData = validate(newElement);
    newElement.valid = validationData[0];
    newElement.validationMessage = validationData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData
    })
  }


  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      firebase
            .auth()
            .signInWithEmailAndPassword(
                  dataToSubmit.email,
                  dataToSubmit.password)
            .then(() => {
              this.props.history.push('/dashboard')
            })
            .catch((error) => {
              this.setState({formError: true})
            })


    } else {
      this.setState({
        formError: true
      })
    }
  }


  render() {
    return (
          <div className="container">
            <div className="signin_wrapper" style={{margin: '100px'}}>
              <form onSubmit={(event) => this.submitForm(event)}>
                <h2>Please Login</h2>

                <FormField
                      id={'email'}
                      formData={this.state.formData.email}
                      change={(element) => this.updateForm(element)}
                />
                <FormField
                      id={'password'}
                      formData={this.state.formData.password}
                      change={(element) => this.updateForm(element)}
                />
                {
                  this.state.formError
                        ? <div className="error_label">Something is wrong, try again.</div>
                        : null
                }
                <button onClick={(event) => this.submitForm(event)}>Login</button>
              </form>
            </div>
          </div>
    );
  }
}

export default Login;