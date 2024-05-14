import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import RecipeForm from '../components/RecipeForm';

const AddRecipePage = () => {
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  // Handles adding a new recipe
  const handleAddRecipe = async (newRecipe) => {
    try {
      await addRecipe(newRecipe);
      toast.success('Recipe Added Successfully');
      navigate('/recipes');
    } catch (error) {
      console.error('Error adding recipe:', error.message);
      toast.error('Failed to add recipe. Please try again.');
    }
  };

  return (
    <section className="bg-lightrose">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-cwhite px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
          <RecipeForm
            initialData={{
              name: '',
              timeprepared: '',
              description: '',
              ingredients: [],
              instructions: [],
            }}
            onSubmit={handleAddRecipe}
            buttonText="Add Recipe"
          />
        </div>
      </div>
    </section>
  );
};

export default AddRecipePage;
