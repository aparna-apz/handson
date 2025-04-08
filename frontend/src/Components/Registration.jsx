import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    console.log('Registered with:', { email, password });
    navigate('/login');
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="col-md-6">
        <div className="card shadow-lg border-0 rounded-4" style={{ backgroundColor: '#e6f0ff' }}>
          <div className="card-body p-5">
            <h2 className="text-center fw-bold text-primary mb-4">Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control rounded-3 shadow-sm"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control rounded-3 shadow-sm"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="form-control rounded-3 shadow-sm"
                />
              </div>
              {error && (
                <div className="alert alert-danger text-center rounded-3 py-2">
                  {error}
                </div>
              )}
              <button type="submit" className="btn btn-primary w-100 rounded-3 fw-semibold shadow-sm">
                Register
              </button>
            </form>
            <div className="text-center mt-3">
              <Link to="/" className="text-decoration-none text-primary">
                Already have an account? Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
