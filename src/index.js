import React from 'react';
import ReactDOM from 'react-dom';

// Google YouTube API Key
import { API_KEY } from '../API_KEY';

// Create a simple component
const App = () => {
  return <div>Hi</div>;
};

// Mount the component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
