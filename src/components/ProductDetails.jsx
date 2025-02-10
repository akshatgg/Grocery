import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Typography, Card, CardMedia, CardContent, Chip, Stack } from '@mui/material';
import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import ProductsData from '../components/AllProducts/ProductsData';

const StyledCard = styled(Card)({
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  overflow: 'visible',
});

const ProductDetails = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartData')) || {};
    setCartItems(storedCart);

    let item = null;
    const productUid = parseInt(uid, 10); // Ensure uid is a number

    for (const category of ProductsData) {
      const foundItem = category.target.find((prod) => prod.uid === productUid);
      if (foundItem) {
        const details = foundItem.vegetablesDetails || foundItem.fruitDetails || foundItem;
        item = {
          uid: foundItem.uid,
          name: details.name || details.fruitName || details.strMeal || details.strDrink || 'Unknown Product',
          price: details.price || 0,
          category: category.Category,
          image: details.photo_url || '',
          description: details.description || 'Fresh, high-quality product.',
        };
        break;
      }
    }

    setProduct(item);
  }, [uid]);

  const handleAddToCart = () => {
    if (!product) return;

    const newQuantity = (cartItems[uid]?.quantity || 0) + 1;
    setCartItems((prev) => {
      const updated = {
        ...prev,
        [uid]: { ...product, quantity: newQuantity },
      };
      localStorage.setItem('cartData', JSON.stringify(updated));
      return updated;
    });
  };

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8, textAlign: 'center' }}>
        <Typography variant="h4" color="error">
          Product Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{  mb: 8, p:10}}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 4, color: '#6a11cb' }}
      >
        Back
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <StyledCard>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
            <CardMedia
  component="img"
  image={product.image}
  alt={product.name}
  sx={{
   
    width: '100%', // Ensures the image takes full width of the container
    height: { xs: '250px', sm: '350px', md: '450px', lg: '500px' }, // Responsive height
    objectFit: 'cover', // Ensures the image covers without stretching
    borderRadius: { xs: '16px', md: '16px 0 0 16px' }, // Keeps consistent styling
  }}
/>


            </Grid>

            <Grid item xs={12} md={6} sx={{ py: 4, pr: 4 }}>
              <CardContent>
                <Stack spacing={4}>
                  <div>
                    <Chip label={product.category || 'General'} color="primary" sx={{ mb: 2 }} />
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#e74c3c', fontWeight: 700 }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
                      Product Details
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#7f8c8d', lineHeight: 1.8 }}>
                      {product.description}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
                      In Your Cart
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Chip label={`Quantity: ${cartItems[uid]?.quantity || 0}`} variant="outlined" color="primary" />
                      <Button
                        variant="contained"
                        startIcon={<ShoppingCart />}
                        onClick={handleAddToCart}
                        sx={{
                          background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                          px: 4,
                          py: 1.5,
                          borderRadius: '12px',
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Stack>
                  </div>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => navigate('/cart')}
                    sx={{ mt: 2, py: 2, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                  >
                    View Cart
                  </Button>
                </Stack>
              </CardContent>
            </Grid>
          </Grid>
        </StyledCard>
      </motion.div>
    </Container>
  );
};

export default ProductDetails;
