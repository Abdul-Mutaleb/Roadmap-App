import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }} className="shadow">
        <Card.Body>
          <h3 className="text-center">Login</h3>
          <p className="text-center">Please login to your account.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" name="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <Link to="/signup" className="btn btn-link p-0">Sign Up</Link>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
