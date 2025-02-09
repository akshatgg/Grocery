import React from 'react';
import { Box, Container, TextField, Button, Typography, Grid, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LocationOn, Email, Phone, ShoppingCart, Schedule, LocalShipping, Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  const [inquiryType, setInquiryType] = React.useState('');

  const handleChange = (event) => {
    setInquiryType(event.target.value);
  };

  return (
    <Box className="grocery-contact-container">
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

      <Container maxWidth="lg">
        <Typography variant="h2" className="grocery-title" gutterBottom>
          Fresh Support
          <motion.span 
            className="title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </Typography>

        <Grid container spacing={4} className="contact-content">
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" className="grocery-form">
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Inquiry Type</InputLabel>
                <Select
                  value={inquiryType}
                  label="Inquiry Type"
                  onChange={handleChange}
                >
                  <MenuItem value="order">Order Issues</MenuItem>
                  <MenuItem value="delivery">Delivery Questions</MenuItem>
                  <MenuItem value="product">Product Quality</MenuItem>
                  <MenuItem value="account">Account Help</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Order Number (if applicable)"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCart />}
                  className="grocery-submit-btn"
                >
                  Send Inquiry
                </Button>
              </motion.div>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Box className="grocery-info">
              <motion.div whileHover={{ y: -5 }} className="info-card">
                <LocalShipping className="info-icon" />
                <Typography variant="h6">Delivery Support</Typography>
                <Typography>7am-10pm Daily</Typography>
                <Typography>+1 (800) 123-4567</Typography>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="info-card">
                <Schedule className="info-icon" />
                <Typography variant="h6">Store Hours</Typography>
                <Typography>Mon-Sun: 6am-11pm</Typography>
                <Typography>Holidays: 8am-9pm</Typography>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="info-card">
                <Email className="info-icon" />
                <Typography variant="h6">Email Support</Typography>
                <Typography>support@freshgrocer.com</Typography>
                <Typography>orders@freshgrocer.com</Typography>
              </motion.div>

              <Box className="social-section">
                <Typography variant="h6" sx={{ mb: 2 }}>Connect With Us</Typography>
                <Box className="social-links">
                  <IconButton href="#" className="social-btn">
                    <Facebook fontSize="large" />
                  </IconButton>
                  <IconButton href="#" className="social-btn">
                    <Instagram fontSize="large" />
                  </IconButton>
                  <IconButton href="#" className="social-btn">
                    <WhatsApp fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Store Locations */}
        <Box className="store-locations">
          <Typography variant="h4" className="location-title">
            Our Stores
            <motion.span className="location-underline" />
          </Typography>
          <Grid container spacing={3}>
            {['Downtown', 'Westside', 'Eastside'].map((location, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box className="store-card">
                  <LocationOn className="store-icon" />
                  <Typography variant="h6">{location} Market</Typography>
                  <Typography>Open Daily 6am-11pm</Typography>
                  <Typography>Parking Available</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;