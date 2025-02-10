import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import ProductsData from '../../AllProducts/ProductsData';
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './SnaksFilterProduct.css';

const SnaksFilterProduct = () => {
    const navigate = useNavigate();
    const availableFilters = useSelector((s) => s.filters);
    const selectedCategories = availableFilters.categories;
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("cartData")) || {};
        setCartItems(storedData);
    }, []);

    const updateLocalStorage = (newData) => {
        localStorage.setItem("cartData", JSON.stringify(newData));
    };

    const increaseQuantity = (product) => {
        const { uid, name, price, category, image } = product;
        setCartItems((prev) => {
            const currentItem = prev[uid] || { uid, name, price, category, image, quantity: 0 };
            const updatedItem = { ...currentItem, quantity: currentItem.quantity + 1 };
            const newCartItems = { ...prev, [uid]: updatedItem };
            updateLocalStorage(newCartItems);
            return newCartItems;
        });
    };

    const decreaseQuantity = (uid) => {
        setCartItems((prev) => {
            const currentItem = prev[uid];
            if (!currentItem) return prev;

            const newQuantity = currentItem.quantity - 1;
            if (newQuantity <= 0) {
                const newCartItems = { ...prev };
                delete newCartItems[uid];
                updateLocalStorage(newCartItems);
                return newCartItems;
            }

            const updatedItem = { ...currentItem, quantity: newQuantity };
            const newCartItems = { ...prev, [uid]: updatedItem };
            updateLocalStorage(newCartItems);
            return newCartItems;
        });
    };

    const filteredProducts = selectedCategories.includes("All")
        ? ProductsData
        : ProductsData.filter(product =>
            selectedCategories.includes(product.Category)
        );

    return (
        <Box p={6}>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(category => (
                    <Box key={category.id} mb={8}>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', paddingBottom: '2rem' }}>
                            <span role="img" aria-label="category">🍽️</span> {category.Category}
                        </Typography>

                        <Grid container spacing={3}>
                            {category.target.map((item) => {
                                const details = item.vegetablesDetails || item.fruitDetails || item;
                                const productName = details.name || details.fruitName || details.strMeal || details.strDrink;
                                const productPrice = details.price;
                                const productUID = item.uid;
                                const productImage = details.photo_url;

                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={2} key={productUID}>
                                        <Card
                                            className="product-card"
                                            onMouseEnter={() => console.log(`Hovered Product UID: ${productUID}`)} // Logs UID on hover
                                        >
                                           <CardMedia
    component="img"
    className="product-image"
    image={productImage}
    alt={productName}
    sx={{ cursor: 'pointer' }}
    onClick={() => navigate(`/product/${productUID}`)} // Navigate on image click
/>

                                            <CardContent className="product-card-content">
                                                <Typography variant="h6" component="h3">
                                                    {productName}
                                                </Typography>
                                                <Typography variant="body1" color="textSecondary">
                                                    ${productPrice.toFixed(2)}
                                                </Typography>
                                                {cartItems[productUID]?.quantity > 0 ? (
                                                    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                                                        <IconButton
                                                            onClick={() => decreaseQuantity(productUID)}
                                                            color="secondary"
                                                        >
                                                            <Remove />
                                                        </IconButton>
                                                        <Typography variant="h6" mx={2}>
                                                            {cartItems[productUID]?.quantity || 0}
                                                        </Typography>
                                                        <IconButton
                                                            onClick={() => increaseQuantity({
                                                                uid: productUID,
                                                                name: productName,
                                                                price: productPrice,
                                                                category: category.Category,
                                                                image: productImage
                                                            })}
                                                            color="primary"
                                                        >
                                                            <Add />
                                                        </IconButton>
                                                    </Box>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        fullWidth
                                                        onClick={() => increaseQuantity({
                                                            uid: productUID,
                                                            name: productName,
                                                            price: productPrice,
                                                            category: category.Category,
                                                            image: productImage
                                                        })}
                                                    >
                                                        Add to Cart
                                                    </Button>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                ))
            ) : (
                <Typography variant="h6" color="textSecondary" align="center">
                    No products found for selected categories.
                </Typography>
            )}
        </Box>
    );
};

export default SnaksFilterProduct;
