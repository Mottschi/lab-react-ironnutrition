// src/App.js
import { useState } from 'react';
import './App.css';
import foodsImport from "./foods.json";

import FoodBox from './components/FoodBox'
import {Row, Divider, Button} from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

foodsImport.forEach(food => food.id = crypto.randomUUID())

function App () {
  const [foods, setFoods] = useState(foodsImport);
  const [filter, setFilter] = useState('')

  function createFood(food) {
    food.id = crypto.randomUUID();
    setFoods([...foods, food]);
  }

  // This function receives an id and returns an event handler that will delete the
  // food with the matching id from the foods state array
  function createHandlerDeleteFood(id) {
    return (event) => {
      setFoods (foods.filter(food => food.id !== id)); 
    }
  }

  function handleSearch(event) {
    setFilter(event.target.value);
  }

  const filteredFood = (!filter.length) ? foods : foods.filter(food => food.name.toLowerCase().includes(filter.toLowerCase()));
  console.log(filteredFood)
  

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm handleCreateFood={createFood}/>
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search handleSearch={handleSearch} searchTerm={filter}/>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {filteredFood.map((food)=>
          <FoodBox key={food.id} food={food} createHandlerDeleteFood={createHandlerDeleteFood}/>
        )}
      </Row>
    </div>);
}
export default App;