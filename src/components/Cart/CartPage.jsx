import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography, Card, CardContent, IconButton, CircularProgress } from '@mui/material';
import { Delete, Remove, Add } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Styled Components
const StyledCard = styled(Card)({
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
  color: 'white',
  fontWeight: 'bold',
  '&:hover': {
    background: 'linear-gradient(45deg, #2575fc, #6a11cb)',
  },
});

const CartPage = () => {
  const [cartItems, setCartItems] = useState({});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartData')) || {};
    console.log("Loaded cart data:", storedCart); // Debugging log
    setCartItems(storedCart);
    setLoading(false);
  }, []);

  // Recalculate total price when cart updates
  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const totalAmount = Object.values(cartItems).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  };

  const updateQuantity = (uid, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [uid]: { ...prev[uid], quantity: newQuantity },
      };
      localStorage.setItem('cartData', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeItem = (uid) => {
    setCartItems((prev) => {
      const { [uid]: removed, ...rest } = prev;
      localStorage.setItem('cartData', JSON.stringify(rest));
      return rest;
    });
  };

  // Debugging: Check if image URLs are correct
  const handleImageError = (e, uid) => {
    console.log(`Image failed to load for ${uid}:`, e.target.src);
    e.target.src = "https://via.placeholder.com/100?text=No+Image"; // Fallback image
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
        🛒 Your Shopping Cart
      </Typography>

      {/* Loading state */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress />
        </div>
      ) : Object.keys(cartItems).length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" sx={{ mt: 4, color: '#7f8c8d' }}>
            Your cart is empty. Start adding some groceries! 🥦
          </Typography>
        </motion.div>
      ) : (
        <Grid container spacing={3}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            <AnimatePresence>
              {Object.values(cartItems).map((item) => (
                <motion.div
                  key={item.uid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledCard sx={{ mb: 2 }}>
                    <CardContent>
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={3}>
                          <motion.img
                            src={item.image || item.img || item.photo_url} // ✅ Tries all possible keys
                            alt={item.name}
                            onError={(e) => handleImageError(e, item.uid)}
                            style={{
                              width: '100%',
                              height: '100px',
                              objectFit: 'cover',
                              borderRadius: 8,
                            }}
                          />
                        </Grid>

                        <Grid item xs={5}>
                          <Typography variant="h6" sx={{ color: '#34495e' }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#e74c3c', fontWeight: 'bold' }}>
                            ${item.price.toFixed(2)} / kg
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                            (Calculated per kg)
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                              onClick={() => updateQuantity(item.uid, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Remove />
                            </IconButton>

                            <Typography variant="h6" sx={{ mx: 2, color: '#2c3e50' }}>
                              {item.quantity}
                            </Typography>

                            <IconButton onClick={() => updateQuantity(item.uid, item.quantity + 1)}>
                              <Add />
                            </IconButton>

                            <IconButton onClick={() => removeItem(item.uid)} sx={{ ml: 1 }}>
                              <Delete color="error" />
                            </IconButton>
                          </div>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </Grid>

          {/* Checkout Summary */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card sx={{ p: 2, borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#34495e' }}>
                  Order Summary
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1">Subtotal:</Typography>
                  <Typography variant="body1">${total.toFixed(2)}</Typography>
                </div>

                <hr style={{ margin: '16px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Total:</Typography>
                  <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold' }}>
                    ${total.toFixed(2)}
                  </Typography>
                </div>

                {/* Proceed to Checkout Button */}
                <StyledButton
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ mt: 3, py: 1.5 }}
                >
                  Proceed to Checkout
                </StyledButton>

                {/* Continue Shopping Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  sx={{ mt: 2, py: 1.5, color: '#6a11cb', borderColor: '#6a11cb' }}
                  onClick={() => navigate('/shop')} // Navigate to the home page
                >
                  Continue Shopping
                </Button>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CartPage;