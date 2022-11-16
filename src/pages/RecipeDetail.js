import React from 'react';
import { useContentful } from 'react-contentful';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const params = useParams();

  // "johannisbeer-marshmallow-tiramisu"
  // http://localhost:3000/recipes/johannisbeer-marshmallow-tiramisu

  const { data, error, fetched, loading } = useContentful({
    contentType: 'blog',
    query: {
      'fields.recipeSlug': params.slug,
    },
  });

  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) {
    return <p>Page does not exist.</p>;
  }

  // See the Contentful query response

  const recipe = data.items[0].fields;
  const recipePreparation =
    recipe.recipePreparation.content[0].content[0].value;

  const recipeIngredients = recipe.recipeIngredients.map(
    (ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    }
  );

  return (
    <div className="md:max-w-[1000px] ">
      <p className="bg-[#B3DEE2] p-4 mt-8 text-xl font-bold text-center w-full md:rounded-xl md:w-auto xl:w-[50%] md:m-auto">
        {recipe.recipeTitle}
      </p>
      <div className="rounded-xl m-4">
        <div className="bg-[#EFCFE3] rounded-xl p-4">
          <div className="flex justify-center">
            <img
              className="border-solid border-2 border-[#EA9AB2] rounded-xl mt-2 md:mt-4 md:min-w-lg md:max-w-xl"
              src={recipe.recipeImg.fields.file.url} alt={recipe.recipeTitle}
            />
          </div>

          <div className="flex flex-col items-center mt-2">
            <div className="p-4 m-2 w-full">
              <h2 className="text-xl font-bold mb-4">Zutaten:</h2>
              <ul>{recipeIngredients}</ul>
            </div>
            <div className="border-solid border-t-2 border-[#EA9AB2] p-4 mt-4 w-[50%]">
              {' '}
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Zubereitung:</h2>
              <p>{recipePreparation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
