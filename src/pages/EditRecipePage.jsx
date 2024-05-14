import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import RecipeForm from '../components/RecipeForm';

const EditRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useContext(RecipeContext);

  // Find the recipe to update based on the ID
  const recipeToUpdate = recipes.find((recipe) => recipe.id === id);

  // Handles updating the recipe
  const handleUpdateRecipe = async (updatedRecipe) => {
    try {
      await updateRecipe(id, updatedRecipe);
      toast.success('Recipe Updated Successfully');
      navigate('/recipes');
    } catch (error) {
      console.error('Error updating recipe:', error.message);
      toast.error('Failed to update recipe. Please try again.');
    }
  };

  return (
    <section className="bg-lightrose">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-cwhite px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
          <RecipeForm
            initialData={recipeToUpdate}
            onSubmit={handleUpdateRecipe}
            buttonText="Edit Recipe"
          />
        </div>
      </div>
    </section>
  );
};

export default EditRecipePage;
