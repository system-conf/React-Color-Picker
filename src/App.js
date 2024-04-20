import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Başlangıçta seçilen renk: beyaz

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="header"></div>
      <div style={{ backgroundColor: selectedColor }} className="container">
        <ColorPicker onSelectColor={handleColorSelect} />
      </div>
    </>
  );
};

export default App;
