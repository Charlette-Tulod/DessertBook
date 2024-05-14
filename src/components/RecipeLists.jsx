import React from 'react';
import RecipeList from './RecipeList';
import { useState, useEffect } from 'react';

const RecipeLists = ({ isMain = false }) => {
  const [recipes, setRecipes] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiUrl = isMain ? '/api/recipes?_limit=6' : '/api/recipes';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <section className="bg-lightrose px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-brown mb-10 text-center">Dessert Recipes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          {recipes.map((recipe) => (
            <RecipeList key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeLists;
