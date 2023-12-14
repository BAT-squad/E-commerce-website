import React, { useState, useEffect } from 'react';

export default function App() {
  const [sliderValue, setSliderValue] = useState(0);
  const [data, setData] = useState([]);

  const handleSliderChange = (e) => {
    setSliderValue(parseFloat(e.target.value));
  };

  useEffect(() => {
    fetchItemsUnderPrice();
  }, [sliderValue]);

  const fetchItemsUnderPrice = async () => {
    try {
   
      const response = await fetch(`http://localhost:5001/api/products/1/${sliderValue}`);
      const newData = await response.json();
    
      setData(newData);

      console.log('Items under the price:', newData);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div>
     
      <label
        htmlFor="customRange3"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        Price
      </label>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        min="0"
        max="1000"
        step="50" // Adjust the step to match your desired increments
        id="customRange3"
        value={sliderValue}
        onChange={handleSliderChange}
      />
       <p className="text-neutral-700 dark:text-neutral-200 text-center mt-2">
        Current Price: {sliderValue} $
      </p>
    </div>
  );
}
