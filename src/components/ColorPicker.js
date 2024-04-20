import React, { useState } from 'react';

const ColorPicker = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Başlangıçta seçilen renk: beyaz

  const handleInputChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    onSelectColor(newColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedColor)
      .then(() => {
        console.log("Renk kopyalandı:", selectedColor);
      })
      .catch((error) => {
        console.error("Kopyalama başarısız oldu:", error);
      });
  };

  return (
    <div className='column'>
      <input className='pickerim'
        type="color"
        value={selectedColor}
        onChange={handleInputChange}
      />
      <button className='kopyalama' onClick={copyToClipboard}>Renk Kodunu Kopyala</button>
    </div>
  );
};

export default ColorPicker;
