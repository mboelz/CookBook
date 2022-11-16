import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ entry }) => {
  // console.log(entry);

  const { recipeSlug, recipeImg, recipeTitle } = entry.fields;

  return (
    <Link to={`/recipes/${recipeSlug}`}>
      <div className="flex flex-col bg-[#EFCFE3] rounded-xl p-4 m-4 md:w-[300px]">
        <div className="flex justify-center">
          <img
            src={recipeImg.fields.file.url}
            alt={recipeTitle}
            className="object-cover h-80 w-full rounded-xl border-solid border-2 border-[#EA9AB2]"
          />
        </div>

        <div>
          <p className="text-center text-xl font-bold m-4 md:min-h-[90px] md:flex md:items-center md:justify-center">
            {entry.fields.recipeTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeItem;
