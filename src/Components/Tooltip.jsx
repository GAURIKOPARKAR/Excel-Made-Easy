import React, { useState } from 'react';

const Tooltip = ({ content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="relative inline-block">
      <div
        className="border border-gray-300 rounded p-2 cursor-pointer"
        onClick={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover over me
      </div>
      {showTooltip && (
        <div className="absolute z-10 bg-white shadow-md p-2 border border-gray-300 rounded">
          <div className="flex justify-end">
            <button onClick={toggleTooltip} className="text-gray-600 hover:text-gray-800">&times;</button>
          </div>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
