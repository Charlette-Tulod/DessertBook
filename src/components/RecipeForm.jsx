import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { TextField, Button, Typography, Box, IconButton, Container } from '@mui/material';

const RecipeForm = ({ initialData, onSubmit, buttonText, headerText }) => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: initialData || {
      name: '',
      timeprepared: '',
      description: '',
      ingredients: [''],
      instructions: [''],
      image: null,
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

  const image = watch('image');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setValue('image', null);
  };

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

        {/* Image Upload */}
        <Box mb={4}>
          <Typography variant="subtitle1" component="h3" color="customColors.brown" gutterBottom>
            Image
          </Typography>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    field.onChange(e);
                    handleImageChange(e);
                  }}
                  style={{ display: 'none' }}
                  id="upload-button"
                />
                <label htmlFor="upload-button">
                  <Button
                    size="small"
                    variant="outlined"
                    component="span"
                    sx={{
                      borderRadius: '5px',
                      boxShadow: 'none',
                      color: '#fda4af',
                    }}
                  >
                    Upload Image
                  </Button>
                </label>
              </div>
            )}
          />
          {image && (
            <Box mt={2} display="flex" alignItems="center">
              <img
                src={image}
                alt="Recipe"
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
              />
              <IconButton onClick={handleImageDelete} color="secondary">
                <FaTrash size={20} />
              </IconButton>
            </Box>
          )}
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
                <FaTrash size={20} />
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
                <FaTrash size={20} />
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
