import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import RecipeForm from '../components/RecipeForm';
import { updateRecipe as updateRecipeService } from '../services/RecipeService';

const EditRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes } = useContext(RecipeContext);

  // Find the recipe to update based on the ID
  const recipeToUpdate = recipes.find((recipe) => recipe.id === id);

  // Handles updating the recipe
  const handleUpdateRecipe = async (updatedRecipe) => {
    try {
      await updateRecipeService(id, updatedRecipe);
      toast.success('Recipe Updated Successfully');
      navigate('/recipes');
    } catch (error) {
      console.error('Error updating recipe:', error.message);
      toast.error('Failed to update recipe. Please try again.');
    }
  };

  return (
    <section className="bg-lightrose">
      <div className="container m-auto py-6 px-6">
        <Link to={`/recipes/${id}`} className="text-brown hover:darkerrose flex items-center">
          <FaArrowLeft className=" text-brown" />
        </Link>
      </div>
      <div className="container m-auto max-w-3xl py-10">
        <div className="bg-cwhite px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
          <RecipeForm
            initialData={recipeToUpdate}
            onSubmit={handleUpdateRecipe}
            buttonText="Edit Recipe"
            headerText="Edit Recipe"
          />
        </div>
      </div>
    </section>
  );
};

export default EditRecipePage;
