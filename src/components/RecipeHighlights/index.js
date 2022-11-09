import React from 'react';
import { useContentful } from 'react-contentful';
import { Link } from 'react-router-dom';
import Headline from '../Main/Headline';
import RecipeItem from '../RecipeItem';

const RecipeHighlights = () => {
  const { data, error, fetched, loading } = useContentful({
    contentType: 'blog',
    query: {
      'fields.recipeHighlight': true,
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
  // console.log(data.items);

  return (
    <div className="w-full">
      <Headline text="Highlights der Woche:" />
      {data.items.map(entry => {
        return (
          <RecipeItem key={entry.sys.id} entry={entry} />

          // <Link key={entry.sys.id} to={`/recipes/${entry.fields.recipeSlug}`}>
          //   {entry.fields.recipeTitle}
          // </Link>
        );
      })}
    </div>
  );
};

export default RecipeHighlights;
