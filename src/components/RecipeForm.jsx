// import React, { useState, useEffect } from 'react';
// import { FaTrash } from 'react-icons/fa';
// import { FiPlusCircle } from 'react-icons/fi';
// import { TextField, Button, Typography, Box, IconButton, Container } from '@mui/material';

// const RecipeForm = ({ initialData, onSubmit, buttonText, headerText }) => {
//   const [name, setName] = useState(initialData?.name || '');
//   const [timeprepared, setTimeprepared] = useState(initialData?.timeprepared || '');
//   const [description, setDescription] = useState(initialData?.description || '');
//   const [ingredients, setIngredients] = useState(initialData?.ingredients || []);
//   const [instructions, setInstructions] = useState(initialData?.instructions || []);

//   // Handles change in ingredient and instruction input
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

//   // Add a new ingredient and instruction field
//   const addIngredientField = () => {
//     setIngredients([...ingredients, '']);
//   };

//   const addInstructionField = () => {
//     setInstructions([...instructions, '']);
//   };

//   // Remove an ingredient field
//   const removeIngredientField = (index) => {
//     const newIngredients = ingredients.filter((_, i) => i !== index);
//     setIngredients(newIngredients);
//   };

//   const removeInstructionField = (index) => {
//     const newInstructions = instructions.filter((_, i) => i !== index);
//     setInstructions(newInstructions);
//   };

//   // Handles recipes submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const recipeData = { name, timeprepared, description, ingredients, instructions };
//     onSubmit(recipeData);
//   };

//   return (
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit}>
//         <Typography
//           variant="h4"
//           component="h2"
//           color="customColors.brown"
//           fontWeight="bold"
//           textAlign="center"
//           marginBottom="40px"
//         >
//           {headerText}
//         </Typography>

//         {/* Name */}
//         <Box mb={4}>
//           <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
//             Recipe Name
//           </Typography>
//           <TextField
//             fullWidth
//             variant="outlined"
//             required
//             value={name}
//             placeholder="e.g. Chocolate Cake"
//             onChange={(e) => setName(e.target.value)}
//             focused
//           />
//         </Box>

//         {/* Time Prepared */}
//         <Box mb={4}>
//           <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
//             Estimated Time Prepared
//           </Typography>
//           <TextField
//             fullWidth
//             variant="outlined"
//             required
//             value={timeprepared}
//             placeholder="e.g. 2 Hours"
//             onChange={(e) => setTimeprepared(e.target.value)}
//             focused
//           />
//         </Box>

//         {/* Description */}
//         <Box mb={4}>
//           <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
//             Description
//           </Typography>
//           <TextField
//             fullWidth
//             variant="outlined"
//             multiline
//             rows={4}
//             value={description}
//             placeholder="Add recipe description"
//             onChange={(e) => setDescription(e.target.value)}
//             focused
//           />
//         </Box>

//         {/* Ingredients */}
//         <Box mb={4}>
//           <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
//             Ingredients
//           </Typography>
//           {ingredients.map((ingredient, index) => (
//             <Box key={index} display="flex" alignItems="center" mb={2}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder={`Ingredient ${index + 1}`}
//                 value={ingredient}
//                 onChange={(e) => handleIngredientChange(e, index)}
//                 focused
//               />
//               <IconButton onClick={() => removeIngredientField(index)} color="secondary">
//                 <FaTrash />
//               </IconButton>
//             </Box>
//           ))}

//           <IconButton aria-label="add" color="secondary" onClick={addIngredientField}>
//             <FiPlusCircle />
//           </IconButton>
//         </Box>

//         {/* Instructions */}
//         <Box mb={4}>
//           <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
//             Instructions
//           </Typography>
//           {instructions.map((instruction, index) => (
//             <Box key={index} display="flex" alignItems="center" mb={2}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 multiline
//                 placeholder={`Instruction ${index + 1}`}
//                 value={instruction}
//                 onChange={(e) => handleInstructionChange(e, index)}
//                 focused
//               />
//               <IconButton onClick={() => removeInstructionField(index)} color="secondary">
//                 <FaTrash />
//               </IconButton>
//             </Box>
//           ))}

//           <IconButton aria-label="add" color="secondary" onClick={addInstructionField}>
//             <FiPlusCircle />
//           </IconButton>
//         </Box>

//         {/* Submit Button */}
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           sx={{
//             borderRadius: 15,
//             boxShadow: 'none',
//             '&:hover': {
//               backgroundColor: '#fda4af',
//             },
//           }}
//         >
//           {buttonText}
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default RecipeForm;

import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { TextField, Button, Typography, Box, IconButton, Container } from '@mui/material';

const RecipeForm = ({ initialData, onSubmit, buttonText, headerText }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialData || {
      name: '',
      timeprepared: '',
      description: '',
      ingredients: [''],
      instructions: [''],
    },
  });

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({ control, name: 'ingredients' });

  const {
    fields: instructionFields,
    append: appendInstruction,
    remove: removeInstruction,
  } = useFieldArray({ control, name: 'instructions' });

  // Reset form with initial data
  // useEffect(() => {
  //   reset(initialData);
  // }, [initialData, reset]);

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h4"
          component="h2"
          color="customColors.brown"
          fontWeight="bold"
          textAlign="center"
          marginBottom="40px"
        >
          {headerText}
        </Typography>

        {/* Name */}
        <Box mb={4}>
          <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
            Recipe Name
          </Typography>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Recipe name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                required
                placeholder="e.g. Chocolate Cake"
                focused
              />
            )}
          />
        </Box>

        {/* Time Prepared */}
        <Box mb={4}>
          <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
            Estimated Time Prepared
          </Typography>
          <Controller
            name="timeprepared"
            control={control}
            rules={{ required: 'Time prepared is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                required
                placeholder="e.g. 2 Hours"
                focused
              />
            )}
          />
        </Box>

        {/* Description */}
        <Box mb={4}>
          <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
            Description
          </Typography>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                placeholder="Add recipe description"
                focused
              />
            )}
          />
        </Box>

        {/* Ingredients */}
        <Box mb={4}>
          <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
            Ingredients
          </Typography>
          {ingredientFields.map((item, index) => (
            <Box key={item.id} display="flex" alignItems="center" mb={2}>
              <Controller
                name={`ingredients.${index}`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    placeholder={`Ingredient ${index + 1}`}
                    focused
                  />
                )}
              />
              <IconButton onClick={() => removeIngredient(index)} color="secondary">
                <FaTrash />
              </IconButton>
            </Box>
          ))}
          <IconButton aria-label="add" color="secondary" onClick={() => appendIngredient('')}>
            <FiPlusCircle />
          </IconButton>
        </Box>

        {/* Instructions */}
        <Box mb={4}>
          <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
            Instructions
          </Typography>
          {instructionFields.map((item, index) => (
            <Box key={item.id} display="flex" alignItems="center" mb={2}>
              <Controller
                name={`instructions.${index}`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    multiline
                    placeholder={`Instruction ${index + 1}`}
                    focused
                  />
                )}
              />
              <IconButton onClick={() => removeInstruction(index)} color="secondary">
                <FaTrash />
              </IconButton>
            </Box>
          ))}
          <IconButton aria-label="add" color="secondary" onClick={() => appendInstruction('')}>
            <FiPlusCircle />
          </IconButton>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 15,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#fda4af',
            },
          }}
        >
          {buttonText}
        </Button>
      </form>
    </Container>
  );
};

export default RecipeForm;
