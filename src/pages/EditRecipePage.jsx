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

// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { RecipeContext } from '../context/RecipeContext';
// import { toast } from 'react-toastify';
// import { FaTrash } from 'react-icons/fa';
// import { FiPlusCircle } from 'react-icons/fi';

// const UpdateRecipePage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { recipes, updateRecipe } = useContext(RecipeContext);

//   const [name, setName] = useState('');
//   const [timeprepared, setTimeprepared] = useState('');
//   const [description, setDescription] = useState('');
//   const [ingredients, setIngredients] = useState([]);
//   const [instructions, setInstructions] = useState([]);

//   // Effect to load the recipe to be updated when component mounts or recipes change
//   useEffect(() => {
//     const recipeToUpdate = recipes.find((recipe) => recipe.id === id);
//     if (recipeToUpdate) {
//       setName(recipeToUpdate.name);
//       setTimeprepared(recipeToUpdate.timeprepared);
//       setDescription(recipeToUpdate.description);
//       setIngredients(recipeToUpdate.ingredients);
//       setInstructions(recipeToUpdate.instructions);
//     }
//   }, [id, recipes]);

//   // Handle form submission for updating a recipe
//   const editForm = async (e) => {
//     e.preventDefault();

//     const updatedRecipe = {
//       name,
//       timeprepared,
//       description,
//       ingredients,
//       instructions,
//     };

//     try {
//       await updateRecipe(id, updatedRecipe);
//       toast.success('Recipe Updated Successfully');
//       navigate('/recipes');
//     } catch (error) {
//       console.error('Error updating recipe:', error.message);
//       toast.error('Failed to update recipe. Please try again.');
//     }
//   };

//   //Handles change in ingredient and instruction input
//   const handleIngredientChange = (e, index) => {
//     const newIngredients = [...ingredients];
//     newIngredients[index] = e.target.value;
//     setIngredients(newIngredients);
//   };

//   const handleInstructionChange = (e, index) => {
//     const newInstructions = [...instructions];
//     newInstructions[index] = e.target.value;
//     setInstructions(newInstructions);
//   };

//   //Add a new ingredient and instruction field
//   const addIngredientField = () => {
//     setIngredients([...ingredients, '']);
//   };

//   const addInstructionField = () => {
//     setInstructions([...instructions, '']);
//   };

//   //Remove an ingredient field
//   const removeIngredientField = (index) => {
//     const newIngredients = ingredients.filter((_, i) => i !== index);
//     setIngredients(newIngredients);
//   };

//   const removeInstructionField = (index) => {
//     const newInstructions = instructions.filter((_, i) => i !== index);
//     setInstructions(newInstructions);
//   };

//   return (
//     <section className="bg-lightrose">
//       <div className="container m-auto max-w-2xl py-24">
//         <div className="bg-cwhite px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
//           <form onSubmit={editForm}>
//             <h2 className="text-3xl text-center font-semibold mb-6">Edit Recipe</h2>

//             {/* Name */}
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2">Recipe Name</label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 className="border rounded w-full py-2 px-3 mb-2"
//                 placeholder="eg. Chocolate Cake"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             {/* Time Prepared */}
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2">Estimated Time Prepared</label>
//               <input
//                 type="text"
//                 id="timeprepared"
//                 name="timeprepared"
//                 className="border rounded w-full py-2 px-3 mb-2"
//                 placeholder="eg. 2 Hours"
//                 required
//                 value={timeprepared}
//                 onChange={(e) => setTimeprepared(e.target.value)}
//               />
//             </div>

//             {/* Description */}
//             <div className="mb-4">
//               <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 className="border rounded w-full py-2 px-3"
//                 rows="4"
//                 placeholder="Add dessert recipe description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>

//             {/* Ingredients */}
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
//               {ingredients.map((ingredient, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <input
//                     type="text"
//                     name="ingredients"
//                     id={`ingredient-${index}`}
//                     className="border rounded w-full py-2 px-3"
//                     placeholder={`Ingredient ${index + 1}`}
//                     value={ingredient}
//                     onChange={(e) => handleIngredientChange(e, index)}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeIngredientField(index)}
//                     className="ml-2 text-red-500"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               ))}
//               <button type="button" onClick={addIngredientField} className="text-blue-500">
//                 <FiPlusCircle className="mr-2 text-2xl text-brown hover:cursor-pointer" />
//               </button>
//             </div>

//             {/* Instructions */}
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2">Instructions</label>
//               {instructions.map((instruction, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <textarea
//                     type="text"
//                     name="instructions"
//                     id={`instruction-${index}`}
//                     className="border rounded w-full py-2 px-3"
//                     placeholder={`Instruction ${index + 1}`}
//                     value={instruction}
//                     onChange={(e) => handleInstructionChange(e, index)}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeInstructionField(index)}
//                     className="ml-2 text-red-500"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               ))}
//               <button type="button" onClick={addInstructionField} className="text-blue-500">
//                 <FiPlusCircle className="mr-2 text-2xl text-brown hover:cursor-pointer" />
//               </button>
//             </div>

//             <div>
//               <button
//                 className="bg-lightrose hover:bg-darkerrose text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Edit Recipe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpdateRecipePage;
