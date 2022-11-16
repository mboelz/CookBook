import React from 'react';
import RecipeHighlights from '../components/RecipeHighlights';
import Introduce from '../components/Main/Introduce';

const Home = () => {
  return (
    <>
      <div className="text-xl text-black font-semibold m-4 ">
        <Introduce />
        <RecipeHighlights />
      </div>
    </>
  );
};

export default Home;
