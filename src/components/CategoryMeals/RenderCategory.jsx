import { Box } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtersActions } from '../../redux/slices/filtersSlice'; // Adjust the path
import CategoriesData from './CategoriesData';
import { useNavigate } from 'react-router-dom';

const RenderCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedCategories = useSelector((state) => state.filters.categories); // Get selected categories

    const handleCategoryClick = (title) => {
        let updatedCategories = selectedCategories.includes(title)
            ? selectedCategories.filter((category) => category !== title) // Remove if already selected
            : [...selectedCategories, title]; // Add if not selected

        dispatch(filtersActions.setCategories(updatedCategories)); // Dispatch the updated list
        navigate('/shop'); // Navigate to the shop page
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: 5 }}>
            {CategoriesData.map((category) => (
                <Box 
                    key={category.id} 
                    sx={{ 
                        textAlign: 'center', 
                        borderRadius: '20px', 
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: selectedCategories.includes(category.title) ? '2px solid #1976d2' : 'none', // Highlight selected
                        '&:hover img': {
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease-in-out'
                        }
                    }}
                    onClick={() => handleCategoryClick(category.title)}
                >
                    <img 
                        src={category.image} 
                        alt={category.title} 
                        style={{ width: '250px', height: 'auto', margin: '0', padding: '0', borderRadius: '8px' }} 
                    />
                </Box>
            ))}
        </Box>
    );
};

export default RenderCategory;
