import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Invalid email address';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Invalid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form data:', formData);
    }
  };

  return (
    <div style={styles.container}>
             {/* Animated Food Icons Background */}
      <div className="animated-food-icons">
        {['🍎', '🥦', '🥑', '🍞', '🥚', '🍇'].map((icon, index) => (
          <motion.div
            key={index}
            className="food-icon"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>🌿 EcoBazar</div>
          <h1 style={styles.title}>Join Our Green Community</h1>
          <p style={styles.subtitle}>Create your account and start your sustainable shopping journey</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="John Doe"
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="hello@ecobazar.com"
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showPassword}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span style={styles.error}>{errors.password}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              placeholder="1234567890"
            />
            {errors.phone && <span style={styles.error}>{errors.phone}</span>}
          </div>

          <button type="submit" style={styles.signupButton}>
            Create Account
          </button>

          <div style={styles.socialLogin}>
            <p style={styles.socialText}>Or continue with</p>
            <div style={styles.socialButtons}>
              <button type="button" style={styles.googleButton}>
                <span style={styles.socialIcon}>🌐</span> Google
              </button>
              <button type="button" style={styles.facebookButton}>
                <span style={styles.socialIcon}>📘</span> Facebook
              </button>
            </div>
          </div>

          <p style={styles.loginText}>
            Already have an account?{' '}
            <Link to="/login" style={styles.loginLink}>
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f0fff4 0%, #e6fffa 100%)',
      padding: '20px',
      position: 'relative', // Add this
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      padding: '40px',
      maxWidth: '500px',
      width: '100%',
      transition: 'transform 0.3s ease',
      position: 'relative', // Add this
      zIndex: 1, // Add this to bring form above icons
      // ... rest of card styles
    },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: '15px',
  },
  title: {
    fontSize: '24px',
    color: '#2d3436',
    margin: '10px 0',
  },
  subtitle: {
    color: '#636e72',
    fontSize: '14px',
    margin: '0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    color: '#2d3436',
    fontWeight: '500',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #dfe6e9',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#2ecc71',
      boxShadow: '0 0 0 3px rgba(46, 204, 113, 0.2)',
    },
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  showPassword: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '4px',
  },
  signupButton: {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#27ae60',
    },
  },
  socialLogin: {
    textAlign: 'center',
    marginTop: '20px',
  },
  socialText: {
    color: '#636e72',
    fontSize: '14px',
    margin: '15px 0',
  },
  socialButtons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#f8f9fa',
    color: '#2d3436',
    padding: '10px 20px',
    borderRadius: '8px',
    border: '1px solid #dfe6e9',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#f1f3f5',
    },
  },
  facebookButton: {
    backgroundColor: '#1877f2',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#166fe5',
    },
  },
  socialIcon: {
    fontSize: '16px',
  },
  loginText: {
    textAlign: 'center',
    color: '#636e72',
    fontSize: '14px',
    marginTop: '20px',
  },
  loginLink: {
    color: '#2ecc71',
    fontWeight: '500',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
};

export default SignupPage;