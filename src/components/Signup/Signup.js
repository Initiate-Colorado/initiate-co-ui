// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// Component
class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: '',
      isLoading: false,
      user: {
        name: '',
        email: '',
        password: '',
      }
    }
  }

  register(userDetails) {
      return axios.post('http://localhost:8000/', mutation({
        operation: 'userSignup',
        variables: userDetails,
        fields: ['name', 'email', 'password']
      })).then(
        response => {
          console.log(response)
        }
      ).catch(function (error) {
        console.log(error);
      })
  }

  

  onChange = (event) => {
    let user = this.state.user
    user[event.target.name] = event.target.value

    this.setState({
      user
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    this.register(this.state.user)
  }

  render() {
    return (
          <form onSubmit={this.onSubmit}>
            <div style={{ width: '25em', margin: '0 auto' }}>
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                required="required"
                name="name"
                value={this.state.user.name}
                onChange={this.onChange}
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                required="required"
                name="email"
                value={this.state.user.email}
                onChange={this.onChange}
                style={{ marginTop: '1em' }}
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                required="required"
                name="password"
                value={this.state.user.password}
                onChange={this.onChange}
                style={{ marginTop: '1em' }}
              />
            </div>

            <div style={{ marginTop: '2em' }}>
              {/* Form submit */}
              <button type="submit" theme="secondary" disabled={this.state.isLoading}>
                Signup
              </button>
            </div>
          </form>
  )  
}
}

// Component Properties

export default connect(null, )(withRouter(Signup))
