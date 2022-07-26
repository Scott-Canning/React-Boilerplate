import React from 'react';
import ReactDOM from 'react-dom';

// document.querySelector(
//     '#fromjs'
// ).innerHTML = `<h1>From index.js</h1>`;
//console.log("My first web app");

ReactDOM.render(
    <h1>Hello from index.js</h1>,
    document.querySelector(
      '#fromjs'
    )
  );