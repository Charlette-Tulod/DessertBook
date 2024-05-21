import React, { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '../services/RecipeService';

export const RecipeContext = createContext();

const RecipeContextProvider = ({ children }) => {
  const recipesQuery = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,
  });

  return (
    <RecipeContext.Provider value={{ recipes: recipesQuery.data || [] }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
