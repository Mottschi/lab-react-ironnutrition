import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({handleCreateFood}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    function handleNameInputChange(event) {
        setName(event.target.value)
    }

    function handleImageInputChange(event) {
        setImage(event.target.value)
    }

    function handleCaloriesInputChange(event) {
        if (event.target.value === '') return setCalories('')

        let cal = parseInt(event.target.value);
        if (!isNaN(cal)) setCalories(cal);
    }

    function handleServingsInputChange(event) {
        if (event.target.value === '') return setServings('')

        const serve = parseInt(event.target.value);
        if (!isNaN(serve)) setServings(serve);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(typeof calories)
        if (!name.length || !image.length || typeof calories === 'string' || typeof servings === 'string') return alert('Please fill out all fields before submitting a new food!');

        const newFood = {name, image, servings, calories};
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
      <Input value={name} type="text" placeholder="Name" onChange={handleNameInputChange}/>

      <label htmlFor='input-image'>Image:</label>
      <Input type='text' name='image' id='input-image' value={image} placeholder="Image URL" onChange={handleImageInputChange}/>

      <label>Calories:</label>
      <Input type='number' name='calories' id='input-calories' value={calories} placeholder="Calories" onChange={handleCaloriesInputChange}/>

      <label>Servings:</label>
      <Input type='number' name='calories' id='input-servings' value={servings} placeholder="Servings" onChange={handleServingsInputChange}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;