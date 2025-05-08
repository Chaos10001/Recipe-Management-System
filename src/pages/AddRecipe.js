
import React, { useState } from 'react';
import axios from 'axios';

function AddRecipe() {
  const [form, setForm] = useState({ title: '', ingredients: '', instructions: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/api/recipes', {
      ...form,
      ingredients: form.ingredients.split(',')
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Recipe added');
    window.location.href = '/home';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <input placeholder="Ingredients (comma separated)" onChange={e => setForm({...form, ingredients: e.target.value})} />
      <textarea placeholder="Instructions" onChange={e => setForm({...form, instructions: e.target.value})} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddRecipe;
