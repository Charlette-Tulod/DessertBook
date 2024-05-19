// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { RecipeContext } from '../context/RecipeContext';
// import { FaArrowLeft } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// const IndiRecipePage = () => {
//   const { id } = useParams();
//   const { recipes, deleteRecipe } = useContext(RecipeContext);
//   // const [recipe, setRecipe] = useState(null);
//   const navigate = useNavigate();

//   // Find the recipe to display based on the ID
//   const selectedRecipe = recipes?.length > 0 ? recipes.find((recipe) => recipe.id === id) : null;

//   // Deleting a Recipe
//   const onDeleteClick = async () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
//     if (confirmDelete) {
//       try {
//         await deleteRecipe(id);
//         toast.success('Recipe deleted successfully');
//         navigate('/recipes');
//       } catch (error) {
//         console.error('Error deleting recipe:', error.message);
//         toast.error('Failed to delete recipe');
//       }
//     }
//   };

//   // if (!recipe) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div className="bg-lightrose min-h-screen min-w-full">
//       <section>
//         <div className="container m-auto py-6 px-6">
//           <Link to="/recipes" className="text-brown hover:darkerrose flex items-center">
//             <FaArrowLeft className="mr-2 text-brown" />
//           </Link>
//         </div>
//       </section>

//       <section>
//         <div className="container m-auto py-10 px-6">
//           {/* Name Infos */}
//           <div className="grid grid-cols-1 md:grid-cols-30/70 w-full gap-6">
//             <div className="bg-cwhite p-6 rounded-lg shadow-md ">
//               <h1 className="text-3xl text-brown font-bold mb-4">{selectedRecipe.name}</h1>
//               <div className="border border-lightrose mb-5"></div>

//               <p className=" mt-8">{selectedRecipe.description}</p>

//               <div className="text-brown mb-4 mt-8 flex align-middle justify-center md:justify-start">
//                 <p>Estimated Time Prepared: {selectedRecipe.timeprepared}</p>
//               </div>

//               <div className="border border-lightrose mb-5"></div>
//               <h3 className="text-xl font-bold mb-6 mt-10 text-brown">Manage Recipe</h3>

//               <Link
//                 to={`/editrecipe/${selectedRecipe.id}`}
//                 className="bg-darkerrose hover:bg-rose text-white text-center  py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
//               >
//                 Edit Recipe
//               </Link>

//               <button
//                 onClick={() => onDeleteClick(selectedRecipe.id)}
//                 className="bg-darkerrose hover:bg-rose text-white  py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
//               >
//                 Delete Recipe
//               </button>
//             </div>

//             {/* Recipe Infos*/}
//             <div className="ml-6 ">
//               <div className="bg-cwhite p-6 rounded-lg shadow-md ">
//                 <h3 className="text-brown text-lg font-bold mb-6">Ingredients</h3>

//                 <ul className="list-disc ml-6">
//                   {selectedRecipe.ingredients.map((ingredient, index) => (
//                     <li key={index} className="mb-2">
//                       {ingredient}
//                     </li>
//                   ))}
//                 </ul>

//                 <h3 className="text-brown text-lg font-bold mb-6 mt-10">Instructions</h3>

//                 <ol className="list-decimal ml-6">
//                   {selectedRecipe.instructions.map((instruction, index) => (
//                     <li key={index} className="mb-2">
//                       {instruction}
//                     </li>
//                   ))}
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default IndiRecipePage;

import React, { useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const IndiRecipePage = () => {
  const { id } = useParams();
  const { recipes, deleteRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const selectedRecipe = recipes?.length > 0 ? recipes.find((recipe) => recipe.id === id) : null;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDeleteClick = async () => {
    try {
      await deleteRecipe(id);
      toast.success('Recipe deleted successfully');
      navigate('/recipes');
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
      toast.error('Failed to delete recipe');
    }
    handleClose();
  };

  if (!selectedRecipe) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#fff1f2', minHeight: '100vh' }}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
          <IconButton component={Link} to="/recipes" sx={{ color: '#754328' }}>
            <FaArrowLeft />
          </IconButton>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ backgroundColor: '#ffffff', p: 3, borderRadius: 4, boxShadow: 2 }}>
              <Typography variant="h4" fontWeight="bold" color="#754328" mb={2}>
                {selectedRecipe.name}
              </Typography>
              <Divider sx={{ borderColor: '#ffe4e6', mb: 3 }} />
              <Typography variant="body1" mb={2}>
                {selectedRecipe.description}
              </Typography>
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body1" color="#754328">
                  Estimated Time Prepared: {selectedRecipe.timeprepared}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: '#ffe4e6', my: 3 }} />
              <Typography variant="h6" fontWeight="bold" color="#754328" mb={2}>
                Manage Recipe
              </Typography>
              <Button
                component={Link}
                to={`/editrecipe/${selectedRecipe.id}`}
                variant="contained"
                sx={{
                  backgroundColor: '#fda4af',
                  color: '#754328',
                  width: '100%',
                  borderRadius: '20px',
                  mb: 2,
                  '&:hover': {
                    backgroundColor: '#ffe4e6',
                    color: '#000000',
                  },
                }}
              >
                Edit Recipe
              </Button>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                sx={{
                  backgroundColor: '#fda4af',
                  color: '#754328',
                  width: '100%',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#ffe4e6',
                    color: '#000000',
                  },
                }}
              >
                Delete Recipe
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ backgroundColor: '#ffffff', p: 5, borderRadius: 4, boxShadow: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="#754328" mb={2}>
                Ingredients
              </Typography>
              <List>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <ListItem
                    key={index}
                    sx={{ listStyleType: 'disc', display: 'list-item', marginLeft: '30px' }}
                  >
                    <ListItemText primary={ingredient} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" fontWeight="bold" color="#754328" mt={4} mb={2}>
                Instructions
              </Typography>
              <List>
                {selectedRecipe.instructions.map((instruction, index) => (
                  <ListItem
                    key={index}
                    sx={{ listStyleType: 'decimal', display: 'list-item', marginLeft: '30px' }}
                  >
                    <ListItemText primary={instruction} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to delete this recipe?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={onDeleteClick} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default IndiRecipePage;
