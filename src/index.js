import React from 'react';
import ReactDOM from 'react-dom';

// Create a simple component
const App = () => {
  return <div>Hi</div>;
};

// Mount the component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
