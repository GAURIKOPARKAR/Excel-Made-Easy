import React from 'react';

const InformationDisplay = ({ content }) => {
  return (
    <div className="bg-gray-200 p-4">
      <p>{content}</p>
    </div>
  );
};

export default InformationDisplay;
