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
      },
      id: null
    }
  }

  register(userDetails) {
      return axios.post('https://initiate-co-backend.herokuapp.com/', mutation({
        operation: 'userSignup',
        variables: userDetails,
        fields: ['name', 'email', 'password', 'id']
      })).then(
        response => {
          console.log(response)
          this.setState({
            id: response.data.data.userSignup.id
          })
          this.setUser(this.state.id)
        }
      ).catch(function (error) {
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
        this.setState({
          user: response.data.data.user
        })
        localStorage.setItem("user", JSON.stringify(this.state.user))
        this.props.history.push('/')
      }
    ).catch(error => {
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
    this.props.history.push('/')
  }

  render() {
    return (
          <form >
            <div style={{ width: '25em', margin: '0 auto' }}>
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
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
              <button type="submit" theme="secondary" disabled={this.state.isLoading} onClick={this.onSubmit}>
                Signup
              </button>
            </div>
          </form>
  )  
}
}

// Component Properties

export default connect(null, )(withRouter(Signup))
