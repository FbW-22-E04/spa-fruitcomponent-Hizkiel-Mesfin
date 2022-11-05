import React, { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "purple"];

export default function Fruit({ fruit, deleteClickHandler }) {
  const [color, setColor] = useState("red");

  // task
  const handleChangeColor = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setColor(colors[newColor]);
  };

  return (
    <div>
      {fruit}, color = {color}
      <button onClick={() => handleChangeColor()}>Change Color</button>
      <button onClick={() => deleteClickHandler(type)}>Delete Me</button>
    </div>
  );
}
