import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../api/AppURL';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
      success: false,
      redirectToLogin: false,
    };
  }

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios.post(AppURL.UserRegister, data)
      .then((response) => {
        this.setState({
          success: true,
          message: response.data.message,
        });

        this.props.setUser(response.data.user);

        setTimeout(() => {
          this.setState({ redirectToLogin: true });
        }, 1000);
      })
      .catch((error) => {
        console.error("Registration error:", error);
        this.setState({
          success: false,
          message: error.response?.data?.message || "Registration failed"
        });
      });
  };

  render() {
    if (this.state.redirectToLogin) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: '30rem' }} className="shadow">
          <Card.Body>
            <h3 className="text-center">Sign Up</h3>
            <form onSubmit={this.formSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control"
                  onChange={(e) => this.setState({ name: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"
                  onChange={(e) => this.setState({ password: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control"
                  onChange={(e) => this.setState({ password_confirmation: e.target.value })} required />
              </div>

              <button type="submit" className="btn btn-primary w-100">Sign Up</button>

              {this.state.message && (
                <div className={`alert mt-3 ${this.state.success ? 'alert-success' : 'alert-danger'}`}>
                  {this.state.message}
                </div>
              )}

              <div className="text-center mt-3">
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Register;
