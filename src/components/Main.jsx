import React from 'react';
import { useState } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from '../ai';

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getRecipe() {
    setIsLoading(true);
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      setRecipe('Failed to load recipe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const addIngredient = (formData) => {
    const newIngredients = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
  };
  return (
    <main className="container">
      <form action={addIngredient} className="form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="ingredient-field"
          name="ingredient"
        />
        <button className="add-button" type="submit">
          Add ingredient
        </button>
      </form>
      <p className="prompt">
        Please enter 4 or more ingredients to generate a recipe
      </p>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {isLoading && (
        <div className="loading">Generating recipe, please wait...</div>
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
