// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { query } from 'gql-query-builder'

// Component
class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: '',
      isLoading: false,
      user: {
        email: '',
        password: '',
      }
    }
  }

  login = (details) => {
    console.log(details)
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'userLogin',
      variables: details,
      fields: [{ user : ['name', 'id', 'email', 'password', 'createdAt', 'updatedAt', 'thirty_days_from', 'ballotTitle', 'ballotDescription']}]
    })).then(
      response => {
        console.log(response.data.data.userLogin.user)
        this.setState({
          user: response.data.data.userLogin.user
        })
        localStorage.setItem("user", JSON.stringify(this.state.user))
      }
    ).catch(error => {
      console.log(error);
    })
  }

  setUser = (userId) => {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'user',
      variables: {id: userId},
      fields: ['name', 'id', 'email', 'password', 'createdAt', 'updatedAt', 'thirty_days_from', 'ballotTitle', 'ballotDescription']
    })).then(
      response => {
        console.log(response.data.data.user)
        // this.setState({
        //   user: response.data.data.user
        // })
        localStorage.setItem("user", this.state.user)
      }
    ).catch(error => {
      console.log(error);
    })
  }


  onLogin = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    this.login(this.state.user)
    this.props.history.push('/')
  }
  

  onChange = (event) => {
    let user = this.state.user
    user[event.target.name] = event.target.value

    this.setState({
      user
    })
  }


  render() {
    return (
          <form >
            <div style={{ width: '25em', margin: '0 auto' }}>
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
              <button type="submit" theme="secondary" onClick={this.onLogin}>
                Login
              </button>
            </div>
          </form>
  )  
}
}

// Component Properties

export default connect(null, )(withRouter(Login))
