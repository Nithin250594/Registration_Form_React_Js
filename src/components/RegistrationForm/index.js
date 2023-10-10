// Write your JS code here
import {Component} from 'react'

import './index.css'

class Registration extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitClicked: false,
    firstNameError: false,
    lastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitClick = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      return this.setState({firstNameError: true, lastNameError: true})
    }
    if (firstName === '' || lastName === '') {
      if (lastName === '') {
        return this.setState({lastNameError: true})
      }
      return this.setState({firstNameError: true})
    }
    return this.setState({isSubmitClicked: true})
  }

  onSubmitAnotherResponse = event => {
    event.preventDefault()

    return this.setState({firstName: '', lastName: '', isSubmitClicked: false})
  }

  firstNameCheck = () => {
    const {firstName} = this.state
    if (firstName === '') {
      return this.setState({firstNameError: true})
    }
    return this.setState({firstNameError: false})
  }

  lastNameCheck = () => {
    const {lastName} = this.state
    if (lastName === '') {
      return this.setState({lastNameError: true})
    }
    return this.setState({lastNameError: false})
  }

  renderSubmitForm = () => {
    const {firstNameError, lastNameError} = this.state
    const blurFirstName = firstNameError ? 'errorInputBox' : 'normalInputBox'
    const blurLastName = lastNameError ? 'errorInputBox' : 'normalInputBox'

    return (
      <form onSubmit={this.onSubmitClick}>
        <div className="nameForm">
          <label htmlFor="firstName" className="label-text">
            FIRST NAME
          </label>
          <input
            type="text"
            placeholder="First name"
            className={`input-box ${blurFirstName}`}
            onChange={this.onChangeFirstName}
            onBlur={this.firstNameCheck}
          />
          {firstNameError && <p className="required-text">Required</p>}
          <label htmlFor="lastName" className="label-text">
            LAST NAME
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            className={`input-box ${blurLastName}`}
            onChange={this.onChangeLastName}
            onBlur={this.lastNameCheck}
          />
          {lastNameError && <p className="required-text">Required</p>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderSubmittedForm = () => (
    <form onSubmit={this.onSubmitAnotherResponse}>
      <div className="submitted-nameForm">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-image"
        />
        <p className="successfully-title">Submitted Successfully</p>
        <button type="submit" className="submit-btn">
          Submit Another Response
        </button>
      </div>
    </form>
  )

  render() {
    const {isSubmitClicked} = this.state

    return (
      <div className="registration-bg">
        <h1 className="registration-title">Registration</h1>

        {isSubmitClicked ? this.renderSubmittedForm() : this.renderSubmitForm()}
      </div>
    )
  }
}

export default Registration
