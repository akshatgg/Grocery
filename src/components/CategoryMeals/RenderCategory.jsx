import { Box, Typography } from '@mui/material';
import React from 'react';
import CategoriesData from './CategoriesData';

const RenderCategory = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: 5 }}>
            {CategoriesData.map((category) => (
                <Box 
                    key={category.id} 
                    sx={{ 
                        textAlign: 'center', 
                        borderRadius: '20px', 
                        overflow: 'hidden',
                        '&:hover img': {
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease-in-out'
                        }
                    }}
                >
                    <img 
                        src={category.image} 
                        alt={category.title} 
                        style={{ width: '250px', height: 'auto', margin: '0', padding: '0', borderRadius: '8px' }} 
                    />
                    {/* <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', borderRadius: '8px' }}>
                        {category.title}
                    </Typography> */}
                </Box>
            ))}
        </Box>
    );
};

export default RenderCategory;