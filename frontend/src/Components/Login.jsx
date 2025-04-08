import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: '400px', backgroundColor: '#e6f0ff' }}>
        <h2 className="text-center text-primary fw-bold mb-4">Gob Drive Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="form-control rounded-3 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control rounded-3 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-3 fw-semibold shadow-sm">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <Link to="/register" className="text-decoration-none text-primary">
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
