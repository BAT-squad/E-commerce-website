import React, { useState, useEffect } from 'react';


export default function SlideBar({fetchItemsUnderPrice}) {
  const [sliderValue, setSliderValue] = useState(10000);
  const [data, setData] = useState([]);

  const handleSliderChange = (e) => {
    setSliderValue(parseFloat(e.target.value));
  };

  useEffect(() => {
    fetchItemsUnderPrice(sliderValue);
  }, [sliderValue]);

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
        min="20"
        max="1000"
        step="10"
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
