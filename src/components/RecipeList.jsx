import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const RecipeList = ({ recipe }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = showFullDescription
    ? recipe.description
    : recipe.description.substring(0, 100) + '...';

  return (
    <Card
      component={Link}
      to={`/recipes/${recipe.id}`}
      sx={{ textDecoration: 'none', color: 'inherit', borderRadius: '16px' }}
    >
      <CardMedia component="img" image={recipe.image} alt={recipe.name} sx={{ height: '220px' }} />
      <CardContent>
        <Typography variant="h5" component="h3" fontWeight="bold" className="text-brown mb-10">
          {recipe.name}
        </Typography>
        <div className="border border-lightrose mb-4 mt-4"></div>

        <Typography variant="body1" className="mb-3">
          {description}
        </Typography>

        <Button
          sx={{
            color: '#754328',
            '&:hover': {
              color: '#fda4af',
            },
            marginBottom: '25px',
          }}
          onClick={(e) => {
            e.preventDefault();
            setShowFullDescription((prevState) => !prevState);
          }}
        >
          {showFullDescription ? 'Less' : 'More'}
        </Button>

        <Typography variant="body1" className="text-brown">
          Estimated Time Prepared: {recipe.timeprepared}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeList;
