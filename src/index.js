import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import contentfulClient  from './helpers/ContentfulClient';
import {ContentfulProvider} from 'react-contentful'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContentfulProvider client={contentfulClient}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContentfulProvider>
);
