import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import CategoriesData from './CategoriesData';
import RenderCategory from './RenderCategory';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const MealsCategories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center',marginBottom: '3rem', marginTop: '2rem' }}>
        Latest Categories of meals
      </Typography>
      <Box
        data-aos="zoom-in-down"
        sx={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img 
          src='src/assets/images/home_page/Categories/CategoryPamplate.png' 
          alt="Category Pamphlet" 
          style={{ margin: '0', padding: '0', width: '400px', height: 'auto' }} 
        />
        <img 
          src='src/assets/images/home_page/Categories/CategoryPamplate2.webp' 
          alt="Category Pamphlet" 
          style={{ margin: '0', padding: '0', width: '400px', height: 'auto'}} 
        />
        <img 
          src='src/assets/images/home_page/Categories/CategoryPamplate3.webp' 
          alt="Category Pamphlet" 
          style={{ margin: '0', padding: '0', width: '400px', height: 'auto'}} 
        />
      </Box>
      <RenderCategory />
    </>
  );
};

export default MealsCategories;