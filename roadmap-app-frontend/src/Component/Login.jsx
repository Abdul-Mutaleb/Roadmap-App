import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import AppURL from '../api/AppURL';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      token: "",
      loggedIn: false,
      redirectTo: "",
      message: ""
    };
  }

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(AppURL.Login, data)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        this.props.setUser(response.data.user);     // update user state in App.jsx
        this.props.setToken(response.data.token);   // update token state in App.jsx

        if (response.data.user.role === 'admin') {
          this.setState({ loggedIn: true, redirectTo: "/admin" });
        } else {
          this.setState({ loggedIn: true, redirectTo: "/navbar" });
        }
      })
      .catch((error) => {
        this.setState({
          message: error.response?.data?.message || "Login failed"
        });
      });

  }

  render() {
    // Redirect after login success
    if (this.state.loggedIn && this.state.redirectTo) {
      return <Navigate to={this.state.redirectTo} />;
    }

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: '30rem' }} className="shadow">
          <Card.Body>
            <h3 className="text-center">Login</h3>
            <form onSubmit={this.formSubmit}>
              {this.state.message && (
                <div className="alert alert-danger">{this.state.message}</div>
              )}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
              <div className="text-center mt-3">
                <Link to="/register">Don't have an account? Sign Up</Link>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
