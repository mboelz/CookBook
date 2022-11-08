import React from 'react'
import { useContentful } from 'react-contentful';

const RecipeHighlights = () => {

    

    const { data, error, fetched, loading } = useContentful({
        contentType: 'blog',
        query: {
          'fields.recipeHighlight': true}
        }
      );

    
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
      console.log(data.items);

  return (
    <div>
        <h1 className="flex flex-col items-center text-xl font-bold m-4">Recipe Highlights:</h1>
     
        {data.items.map( (entry) => {
        return <p key={entry.fields.recipeSlug}>{entry.fields.recipeTitle}</p>
        })}

    </div>
  )
}

export default RecipeHighlights