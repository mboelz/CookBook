import { ContentfulClient } from 'react-contentful';

 const contentfulClient = new ContentfulClient({
    accessToken: 'aI2yVKblqrOR2w3uK_pb_DbQI9lDcsKdN6X70os9Vmc',
    space: 'eeil9c4fo5qu',
    // accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    // space: process.env.REACT_APP_CONTENTFUL_SPACE,
  });
  
  export default contentfulClient;