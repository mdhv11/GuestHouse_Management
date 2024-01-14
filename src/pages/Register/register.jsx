import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@material-ui/core';

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation if needed
    // Call the onRegister function with form data
    onRegister(formData);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Register</Typography>
        <TextField
          label="Username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation if needed
    // Call the onLogin function with form data
    onLogin(formData);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Login</Typography>
        <TextField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

const RegisterLoginPage = () => {
  const handleRegister = (data) => {
    // registration logic here
    console.log('Registering:', data);
  };

  const handleLogin = (data) => {
    // login logic here
    console.log('Logging in:', data);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <RegisterForm onRegister={handleRegister} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LoginForm onLogin={handleLogin} />
      </Grid>
    </Grid>
  );
};

export default RegisterLoginPage;
