import React, { useContext, useState } from 'react';
import RecipeList from './RecipeList';
import { RecipeContext } from '../context/RecipeContext';
import { Container, Typography, Box, Pagination } from '@mui/material';

const RecipeLists = ({ isMain = false }) => {
  const { recipes } = useContext(RecipeContext);
  const [page, setPage] = useState(1);
  const recipesPerPage = 6;
  const totalRecipes = isMain ? Math.min(recipes.length, 6) : recipes.length;
  const pageCount = Math.ceil(totalRecipes / recipesPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedRecipes = recipes.slice((page - 1) * recipesPerPage, page * recipesPerPage);

  return (
    <Box sx={{ backgroundColor: '#fff1f2', px: 4, py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 'bold', color: '#754328', mb: 10, textAlign: 'center' }}
        >
          Dessert Recipes
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          {displayedRecipes.map((recipe) => (
            <RecipeList key={recipe.id} recipe={recipe} />
          ))}
        </div>
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
          />
        )}
      </Container>
    </Box>
  );
};

export default RecipeLists;
