/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import React from "react";

/**
 * Copy the implementation from the previous exercise.
   Add a 'show/hide' button which will conditionally render the Hello component
   Add a button that will cycle through the values world, planet, universe.
   
   Example: on button clicks component renders 'Hello world', 'Hello universe', 'Hello planet'
 */
const App = () => {
  return (
    <div className="App">
      <h1>Hello, Good Luck!</h1>
      <p>
        Use the API endpoint shown below to display a card component for each
        entry.
      </p>
      <p>The API and card layout examples are below:</p>
      <br />
      <br />
      <h2>API Endpoint:</h2>
      <code>https://jsonplaceholder.typicode.com/users</code>

      <h2>Card Layout Example:</h2>
      <img src="./download.png" alt="Code Example" />

      <h2>Your Code Here:</h2>
    </div>
  );
};

export default App;
