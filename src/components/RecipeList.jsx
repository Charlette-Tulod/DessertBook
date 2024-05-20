// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const RecipeList = ({ recipe }) => {
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   const description = showFullDescription
//     ? recipe.description
//     : recipe.description.substring(0, 100) + '...';

//   return (
//     <Link
//       to={`/recipes/${recipe.id}`}
//       className="block bg-cwhite rounded-xl shadow-md hover:shadow-lg transition-shadow relative no-underline"
//     >
//       <div className="p-8">
//         <div className="mb-6">
//           <h3 className="text-xl text-brown font-bold">{recipe.name}</h3>
//         </div>
//         <div className="border border-lightrose mb-5"></div>

//         <div className="mb-3">{description}</div>

//         <button
//           onClick={(e) => {
//             e.preventDefault(); // Prevents navigation on button click
//             setShowFullDescription((prevState) => !prevState);
//           }}
//           className="text-brown mb-5 hover:text-darkerrose"
//         >
//           {showFullDescription ? 'Less' : 'More'}
//         </button>

//         <h3 className="text-brown mb-2 my-5">Estimated Time Prepared: {recipe.timeprepared}</h3>
//       </div>
//     </Link>
//   );
// };

// export default RecipeList;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const RecipeList = ({ recipe }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = recipe.description
    ? showFullDescription
      ? recipe.description
      : `${recipe.description.substring(0, 100)}...`
    : '';

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
