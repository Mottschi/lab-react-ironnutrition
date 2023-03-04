import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ handleCreateFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  function handleNameInputChange(event) {
    setName(event.target.value);
  }

  function handleImageInputChange(event) {
    setImage(event.target.value);
  }

  function handleCaloriesInputChange(event) {
    // There is some weirdness with invalid inputs with number inputs
    // this conditional if block helps us avoid part of them - it blocks
    // inputs that start with a number, but then have letters follow
    if (!event.target.checkValidity()) {
      return;
    }

    // this conditional makes sure that when a number was entered, it is possible
    // to delete it with delete/backspace
    if (event.target.value === '') {
      setCalories('');
      return;
    }

    let cal = parseInt(event.target.value);
    if (!isNaN(cal)) setCalories(cal);
  }

  function handleServingsInputChange(event) {
    console.log('change trigger');
    // There is some weirdness with invalid inputs with number inputs
    // this conditional if block helps us avoid part of them - it blocks
    // inputs that start with a number, but then have letters follow
    if (!event.target.checkValidity()) {
      return;
    }

    // this conditional makes sure that when a number was entered, it is possible
    // to delete it with delete/backspace
    if (event.target.value === '') {
      setServings('');
      return;
    }
    const serve = parseInt(event.target.value);
    if (!isNaN(serve)) setServings(serve);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !name.length ||
      !image.length ||
      typeof calories === 'string' ||
      typeof servings === 'string'
    )
      return alert('Please fill out all fields before submitting a new food!');

    const newFood = { name, image, servings, calories };
    handleCreateFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name:</label>
      <Input
        value={name}
        type="text"
        placeholder="Name"
        onChange={handleNameInputChange}
        required
      />

      <label htmlFor="input-image">Image:</label>
      <Input
        type="text"
        name="image"
        id="input-image"
        value={image}
        placeholder="Image URL"
        onChange={handleImageInputChange}
        required
      />

      <label>Calories:</label>
      <Input
        type="number"
        name="calories"
        id="input-calories"
        value={calories}
        placeholder="Calories"
        onChange={handleCaloriesInputChange}
      />

      <label>Servings:</label>
      <Input
        type="number"
        name="calories"
        id="input-servings"
        value={servings}
        placeholder="Servings"
        onChange={handleServingsInputChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
