import './App.css';
import React from 'react';


function sayGoodbye(){
  return 'Goodbye'
}

function displayHeader(){
  return (
    <h2>About Me</h2>
  )
}


function ImageFrame(){
  return (
    <img src = {require('./cat.jpeg')} alt='cat'/>
  )
}

function App(){
  return (
    <React.Fragment>
      <p>{sayGoodbye()}</p>
      {displayHeader()}
      <ImageFrame/>
    </React.Fragment>
  );
}

export default App;
