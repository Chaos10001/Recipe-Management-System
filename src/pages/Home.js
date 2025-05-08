
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recipes').then(res => {
      setRecipes(res.data);
    });
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.length === 0 && <p>No recipes found. </p>}
      {recipes.map(recipe => (
        <div key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
      <button onClick={() => window.location.href = '/add'}>Add Recipe</button>
      <button onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }}>Logout</button>

    </div>
  );
}

export default Home;
