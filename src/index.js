import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchBar from './components/search_bar';

// Google YouTube API Key
import { API_KEY } from '../API_KEY';

// Create a simple component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Mount the component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
