import React, { useState } from "react";
import Fruit from "./component/Fruit";

const initialState = ["Apple", "Mango", "Banana", "Lemon"];

function App() {
  const [fruits, setFruits] = useState(initialState);

  const handleRemoveFruit = (fruit) => {
    const newFruits = fruits.filter((f) => f !== fruit);
    setFruits(newFruits);
  };

  return (
    <div className="App">
      <h1>Components 1</h1>
      {fruits.map((fruit, i) => (
        <Fruit key={i} fruit={fruit} deleteClickHandler={handleRemoveFruit} />
      ))}
    </div>
  );
}

export default App;
