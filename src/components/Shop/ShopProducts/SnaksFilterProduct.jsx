import React from 'react';
import { useSelector } from "react-redux";
import ProductsData from '../../AllProducts/ProductsData'; // Ensure correct path
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import './SnaksFilterProduct.css'; // Import the CSS file

const SnaksFilterProduct = () => {
    const availableFilters = useSelector((s) => s.filters);
    const selectedCategories = availableFilters.categories;

    // Filter products based on selected categories
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
                        {/* Category Header */}
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold',paddingBottom: '2rem' }}>
                            <span role="img" aria-label="category">🍽️</span> {category.Category}
                        </Typography>

                        {/* Grid Layout for Products */}
                        <Grid container spacing={3}>
                            {category.target.map((item, index) => {
                                const details = item.vegetablesDetails || 
                                                item.fruitDetails || 
                                                item; // Handles different object structures

                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                                        <Card className="product-card">
                                            {/* Product Image */}
                                            <CardMedia
                                                component="img"
                                                className="product-image"
                                                image={details.photo_url}
                                                alt={details.name || details.fruitName || details.strMeal || details.strDrink}
                                            />
                                            {/* Product Info */}
                                            <CardContent className="product-card-content">
                                                <Typography variant="h6" component="h3">
                                                    {details.name || details.fruitName || details.strMeal || details.strDrink}
                                                </Typography>
                                                <Typography variant="body1" color="textSecondary">
                                                    ${details.price.toFixed(2)}
                                                </Typography>
                                                {/* Add to Cart Button */}
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    fullWidth 
                                                    sx={{ mt: 2 }}
                                                >
                                                    Add to Cart 🛒
                                                </Button>
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
