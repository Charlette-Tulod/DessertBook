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

// import React from 'react';
// import { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { RecipeContext } from '../context/RecipeContext';
// import { toast } from 'react-toastify';
// import { FiPlusCircle } from 'react-icons/fi';
// import { FaTrash } from 'react-icons/fa';

// const AddRecipePage = () => {
//   const { addRecipe } = useContext(RecipeContext);
//   const [name, setName] = useState('');
//   const [timeprepared, setTimeprepared] = useState('');
//   const [description, setDescription] = useState('');
//   const [ingredients, setIngredients] = useState([]);
//   const [instructions, setInstructions] = useState([]);

//   const navigate = useNavigate();

//   // Handles form submission
//   const submitForm = async (e) => {
//     e.preventDefault();

//     const newRecipe = {
//       name,
//       timeprepared,
//       description,
//       ingredients,
//       instructions,
//     };

//     try {
//       await addRecipe(newRecipe);
//       toast.success('Recipe Added Successfully');
//       navigate('/recipes');
//     } catch (error) {
//       console.error('Error adding recipe:', error.message);
//       toast.error('Failed to add recipe. Please try again.');
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
//         <div className="bg-cwhite px-6 py-8 mb-4 shadow-md rounded-md  m-4 md:m-0">
//           <form onSubmit={submitForm}>
//             <h2 className="text-3xl text-center text-brown font-semibold mb-6">Add Recipe</h2>

//             {/* Name */}
//             <div className="mb-4 ">
//               <label className="block text-brown font-bold mb-2">Recipe Name</label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 className="border border-darkerrose rounded w-full py-2 px-3 mb-2"
//                 placeholder="eg. Chocolate Cake"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             {/* TimePrepared */}
//             <div className="mb-4">
//               <label className="block text-brown font-bold mb-2">Estimated Time Prepared</label>
//               <input
//                 type="text"
//                 id="timeprepared"
//                 name="timeprepared"
//                 className="border border-darkerrose rounded w-full py-2 px-3 mb-2"
//                 placeholder="eg. 2 Hours"
//                 required
//                 value={timeprepared}
//                 onChange={(e) => setTimeprepared(e.target.value)}
//               />
//             </div>

//             {/* Description */}
//             <div className="mb-4">
//               <label htmlFor="description" className="block text-brown font-bold mb-2">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 className="border border-darkerrose rounded w-full py-2 px-3"
//                 rows="4"
//                 placeholder="Add dessert recipe description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>

//             {/* Ingredients */}
//             <div className="mb-4">
//               <label className="block text-brown font-bold mb-2">Ingredients</label>
//               {ingredients.map((ingredient, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <input
//                     type="text"
//                     name="ingredients"
//                     id={`ingredient-${index}`}
//                     className="border border-darkerrose rounded w-full py-2 px-3"
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
//               <label className="block text-brown font-bold mb-2">Instructions</label>
//               {instructions.map((instruction, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <textarea
//                     type="text"
//                     name="instructions"
//                     id={`instruction-${index}`}
//                     className="border border-darkerrose rounded w-full py-2 px-3"
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
//                 <FiPlusCircle className="mr-3 text-2xl text-brown hover:cursor-pointer" />
//               </button>
//             </div>

//             {/* Add Recipe Button */}
//             <div>
//               <button
//                 className="bg-lightrose hover:bg-darkerrose text-brown font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Add Recipe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddRecipePage;
