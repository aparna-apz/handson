import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const validatePassword = (pass) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/;
    return regex.test(pass);
  };
  
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    if (  !email || !password || !confirmPass) {
      setError('All fields are required');
      return;
    }
    

    if (password !== confirmPass) {
      setError('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
       
        email: email,
        password: password
      });
      alert('✅ Registered successfully!');
      setMsg('🎉 Account created successfully!');
      setError('');
      setEmail('');
      setPassword('');
      navigate('/login', { state: { msg: '✅ Registered successfully' } });
    } 
    catch (err) {
      console.error(err);
      // If Django sends "email already registered", show it
      if (err.response?.data?.email) {
        setError(err.response.data.email[0]); // Because it's usually a list
      } else {
        setError(err.response?.data?.message || 'Something went wrong');
      }
      setMsg('');
    }
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        {msg && <p style={styles.success}>{msg}</p>}
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSignup} style={styles.form}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
          <p style={styles.loginText}>
            Already have an account?{' '}<a href="/login" style={styles.loginLink}>Login</a></p>

        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f4f8',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    width: '320px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4a90e2',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  }
};

export default Signup;
