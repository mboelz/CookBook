import React from 'react';

const Headline = ({ text }) => {
  return (
    <h1 className="bg-[#B3DEE2] text-center rounded-xl text-xl font-bold m-4 p-4">
      {text}
    </h1>
  );
};

export default Headline;
