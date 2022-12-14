import React from 'react';
import { useContentful } from 'react-contentful';
// import { Link } from 'react-router-dom';
import Headline from '../components/Main/Headline';
import RecipeItem from '../components/RecipeItem';

const AllRecipes = () => {
  const { data, error, fetched, loading } = useContentful({
    contentType: 'blog',
    // query: {
    //   'fields.slug[in]': `/${props.match.slug || ''}`,
    // }
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
  const recipes = data.items;

  console.log(recipes);

  const itemsJSX = recipes.map(recipe => {
    return (
      <RecipeItem key={recipe.sys.id} entry={recipe} />
      // <div key={recipe.sys.id}>
      //   <Link to={`/recipes/${recipe.fields.recipeSlug}`}>
      //     {recipe.fields.recipeTitle}
      //   </Link>
      // </div>
    );
  });

  return (
    <div className="m-4 max-w-[1500px]">
      <div className="xl:w-[30%] md:m-auto">
        <Headline text="Alle Rezepte:" />
      </div>
      <div className="md:flex md:flex-wrap md:flex-1 md:justify-center md:mb-10 xl:mt-22 xl:mb-24">
        {itemsJSX}
      </div>
    </div>
  );
};

export default AllRecipes;
