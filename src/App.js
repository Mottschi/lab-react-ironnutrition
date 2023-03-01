// src/App.js
import { useState } from 'react';
import './App.css';
import foodsImport from "./foods.json";

import FoodBox from './components/FoodBox'
import {Row, Divider, Button} from 'antd';
import AddFoodForm from './components/AddFoodForm';

foodsImport.forEach(food => food.id = crypto.randomUUID())

function App () {
  const [foods, setFoods] = useState(foodsImport);

  function createFood(food) {
    food.id = crypto.randomUUID();
    setFoods([...foods, food]);
  }
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm handleCreateFood={createFood}/>
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.map((food)=>
          <FoodBox key={food.id} food={food}/>
        )}
      </Row>
    </div>);
}
export default App;