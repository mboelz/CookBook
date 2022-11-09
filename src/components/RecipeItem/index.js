import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ entry }) => {
  console.log(entry);
  return (
    <Link to={`/recipes/${entry.fields.recipeSlug}`}>
      <div className="flex flex-col bg-[#EFCFE3] rounded-xl p-4 m-4">
        <div className="flex justify-center">
          <img
            src={entry.fields.recipeImg.fields.file.url}
            className="object-cover h-80 w-full rounded-xl border-solid border-2 border-[#EA9AB2] "
          />
        </div>

        <div>
          <p className="text-center text-xl font-bold m-4">
            {entry.fields.recipeTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeItem;

// img {
//     display: block;
//     max-width:230px;
//     max-height:95px;
//     width: auto;
//     height: auto;
//   }
