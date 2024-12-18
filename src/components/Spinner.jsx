import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-overlay flex items-center justify-center">
      <div className="spinner">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Spinner;
