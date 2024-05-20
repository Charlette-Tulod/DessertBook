// import { config } from './config';

// /* Add Recipe */
// export const addRecipe = async (newRecipe) => {
//   try {
//     const response = await fetch(`${config.API_URL}/recipes`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newRecipe),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to add recipe');
//     }

//     const data = await response.json();
//     // setRecipes([...recipes, data]);

//     return { success: true, data };
//   } catch (error) {
//     console.error('Error adding recipe:', error.message);
//     return { success: false, error: error.message };
//   }
// };

// /* Fetch Recipes */
// export const fetchRecipes = async () => {
//   try {
//     const response = await fetch(`${config.API_URL}/recipes`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch recipes');
//     }

//     const data = await response.json();
//     return { success: true, data };
//   } catch (error) {
//     console.error('Error fetching recipes:', error.message);
//     return { success: false, error: error.message };
//   }
// };

// /* Update Recipe */
// export const updateRecipe = async (id, updatedRecipe) => {
//   try {
//     const response = await fetch(`${config.API_URL}/recipes/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedRecipe),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update recipe');
//     }

//     const data = await response.json();
//     // const updatedRecipes = recipes.map((recipe) => {
//     //   if (recipe.id === id) {
//     //     return { ...recipe, ...updatedRecipe };
//     //   }
//     //   return recipe;
//     // });

//     return { success: true, data };
//   } catch (error) {
//     console.error('Error updating recipe:', error.message);
//     return { success: false, error: error.message };
//   }
// };

// /* Delete Recipe */
// export const deleteRecipe = async (id) => {
//   try {
//     const response = await fetch(`${config.API_URL}/recipes/${id}`, {
//       method: 'DELETE',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to delete recipe');
//     }

//     const data = await response.json(); // assuming server responds with some data on delete
//     // const filteredRecipes = recipes.filter((recipe) => recipe.id !== id);
//     // setRecipes(filteredRecipes);

//     return { success: true, data };
//   } catch (error) {
//     console.error('Error deleting recipe:', error.message);
//     return { success: false, error: error.message };
//   }
// };

// RecipeService.jsx
// import { Config } from './config';

// const fetchRecipes = async () => {
//   try {
//     const response = await fetch(`${Config.API_URL}/recipes`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch recipes');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching recipes:', error.message);
//     throw error;
//   }
// };

// const addRecipe = async (newRecipe) => {
//   try {
//     const response = await fetch(`${Config.API_URL}/recipes`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newRecipe),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to add recipe');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error adding recipe:', error.message);
//     throw error;
//   }
// };

// const updateRecipe = async (id, updatedRecipe) => {
//   try {
//     const response = await fetch(`${Config.API_URL}/recipes/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedRecipe),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update recipe');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error updating recipe:', error.message);
//     throw error;
//   }
// };

// const deleteRecipe = async (id) => {
//   try {
//     const response = await fetch(`${Config.API_URL}/recipes/${id}`, {
//       method: 'DELETE',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to delete recipe');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error deleting recipe:', error.message);
//     throw error;
//   }
// };

// export { fetchRecipes, addRecipe, updateRecipe, deleteRecipe };

import axios from 'axios';
import { Config } from './config';

export const getRecipes = async () => {
  const { data } = await axios.get(`${Config.API_URL}/recipes`);
  return data;
};

export const addRecipe = async (newRecipe) => {
  const { data } = await axios.post(`${Config.API_URL}/recipes`, newRecipe);
  return data;
};

export const updateRecipe = async (id, updatedRecipe) => {
  const { data } = await axios.put(`${Config.API_URL}/recipes/${id}`, updatedRecipe);
  return data;
};

export const deleteRecipe = async (id) => {
  const { data } = await axios.delete(`${Config.API_URL}/recipes/${id}`);
  return data;
};
