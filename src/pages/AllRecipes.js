import React from 'react'
import { useContentful } from 'react-contentful';

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
  console.log(data);

  return (
    <div>AllRecipes</div>
  )
}

export default AllRecipes