import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banners from '../assets/banner.png';
import { Button, Container, Typography, Box } from '@mui/material';

const Banner = () => {
  const navigate = useNavigate();

  const renderButton = (text, route) => (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        borderRadius: 20,
        boxShadow: 'none',
        mr: { xs: 0, sm: 2 },
        mb: { xs: 2, sm: 0 },
        '&:hover': {
          backgroundColor: '#fda4af',
        },
      }}
      onClick={() => navigate(route)}
    >
      {text}
    </Button>
  );

  return (
    <Box
      sx={{
        py: { xs: 10, sm: 20 },
        backgroundImage: `url(${Banners})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        height: { xs: 500, sm: 700 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'flex-start' },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '40%' } }}>
          <Typography
            variant="h4"
            component="h1"
            color="customColors.brown"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
          >
            Welcome to
            <br />
            <Typography
              variant="h2"
              component="span"
              fontWeight="bold"
              sx={{ fontSize: { xs: '2.5rem', sm: '3.75rem' } }}
            >
              Dessert Book!
            </Typography>
          </Typography>
          <Typography
            sx={{ my: 4, fontSize: { xs: '1rem', sm: '1rem' } }}
            variant="body1"
            color="customColors.brown"
            paragraph
          >
            Explore a treasure trove of delectable dessert recipes! Indulge in decadent cakes and
            irresistible cookies tailored to satisfy every craving. Delve into meticulously crafted
            recipes, glean helpful tips, and connect with fellow dessert aficionados in our vibrant
            community. Embark on a culinary journey with us today!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              my: 5,
            }}
          >
            {renderButton('Desserts', 'recipes')}
            {renderButton('Add Recipe', 'addrecipe')}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
