import React from 'react';
import { useContentful } from 'react-contentful';
import { Link } from 'react-router-dom';

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
      <div key={recipe.sys.id}>
        <Link to={`/recipes/${recipe.fields.recipeSlug}`}>
          {recipe.fields.recipeTitle}
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1>Übersicht:</h1>
      {itemsJSX}
    </div>
  );
};

export default AllRecipes;
