import React, { useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RecipeContext } from '../context/RecipeContext';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
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
import { deleteRecipe as deleteRecipeService } from '../services/RecipeService';

const IndiRecipePage = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const selectedRecipe = recipes?.length > 0 ? recipes.find((recipe) => recipe.id === id) : null;

  // Use useMutation for deleting a recipe
  const mutation = useMutation({
    mutationFn: () => deleteRecipeService(id),
    onSuccess: () => {
      queryClient.invalidateQueries('recipes');
      toast.success('Recipe deleted successfully');
      navigate('/recipes');
    },
    onError: (error) => {
      console.error('Error deleting recipe:', error.message);
      toast.error('Failed to delete recipe');
    },
  });

  const onDeleteClick = () => {
    mutation.mutate();
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <Card sx={{ backgroundColor: '#ffffff', borderRadius: 4, boxShadow: 2 }}>
              <CardMedia
                component="img"
                image={selectedRecipe.image}
                alt={selectedRecipe.name}
                sx={{ height: '250px' }}
              />
              <CardContent sx={{ padding: '30px' }}>
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
              </CardContent>
            </Card>
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
