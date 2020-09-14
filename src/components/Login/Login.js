// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import "./Login.css";

// Component
class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      token: "",
      error: '',
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
      fields: ['token', { user : ['name', 'id', 'email', 'password', 'createdAt', 'updatedAt', 'thirty_days_from', 'ballotTitle', 'ballotDescription']}]
    })).then(
      response => {
        console.log(response.data.data.userLogin.user)
        console.log(response.data.data.userLogin.token)
        this.setState({
          user: response.data.data.userLogin.user,
          token: response.data.data.userLogin.token
        })
        localStorage.setItem("user", JSON.stringify(this.state.user))
        localStorage.setItem("token", response.data.data.userLogin.token)
        localStorage.setItem('loggedIn', true)
      }
    ).catch(error => {
      console.log(error);
    })
  }

  // setUser = (userId) => {
  //   return axios.post('https://initiate-co-backend.herokuapp.com/', query({
  //     operation: 'user',
  //     variables: {id: userId},
  //     fields: ['name', 'id', 'email', 'password', 'createdAt', 'updatedAt', 'thirty_days_from', 'ballotTitle', 'ballotDescription']
  //   })).then(
  //     response => {
  //       console.log(response.data.data.user)
  //       this.setState({
  //         user: response.data.data.user
  //       })
  //       localStorage.setItem("user", this.state.user)
  //     }
  //   ).catch(error => {
  //     console.log(error);
  //   })
  // }

  updateUser = (userId, token) => {
    axios.defaults.headers.common['Authorization'] = this.state.token
    return axios.post('https://initiate-co-backend.herokuapp.com/', mutation({
      operation: 'user',
      variables: {id: userId},
      fields: ['name']
    }, {
      headers: {
        'Authorization' : `${token}`
      }
    })).then(
      response => {
        console.log(response)
      }
    ).catch(error => {
      console.log(error);
    })
  }

  onUpdate = (event) => {
    event.preventDefault()
    this.updateUser(4, this.state.token)
  }


  onLogin = (event) => {
    event.preventDefault()
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
        <div className="login">
          <form >
              {/* <button type="submit" theme="secondary" onClick={this.onUpdate}>
                Update Test
              </button> */}
            <div className="login-form" style={{ width: '25em', margin: '0 auto' }}>
              {/* Email */}
              <input
                className="login-input"
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
                className="login-input"
                type="password"
                placeholder="Password"
                required="required"
                name="password"
                value={this.state.user.password}
                onChange={this.onChange}
                style={{ marginTop: '1em' }}
              />
            <div style={{ marginTop: '2em' }}>
              {/* Form submit */}
              <button className="login-button" type="submit" theme="secondary" onClick={this.onLogin}>
                Login
              </button>
            </div>
            </div>
          </form>
          </div>
  )  
}
}

// Component Properties

export default connect(null, )(withRouter(Login))
