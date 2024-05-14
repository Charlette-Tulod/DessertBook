import React, { useContext } from 'react';
import RecipeList from './RecipeList';
import { RecipeContext } from '../context/RecipeContext';

const RecipeLists = ({ isMain = false }) => {
  const { recipes } = useContext(RecipeContext);
  const limitRecipe = recipes.slice(0, 6);

  return (
    <section className="bg-lightrose px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-brown mb-10 text-center">Dessert Recipes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          {isMain
            ? limitRecipe.map((recipe) => <RecipeList key={recipe.id} recipe={recipe} />)
            : recipes.map((recipe) => <RecipeList key={recipe.id} recipe={recipe} />)}
        </div>
      </div>
    </section>
  );
};

export default RecipeLists;
