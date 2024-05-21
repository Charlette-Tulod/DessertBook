import axios from 'axios';
import { Config } from './Config';

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
