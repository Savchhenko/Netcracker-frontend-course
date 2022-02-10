import React, {useState} from 'react';
import '../styles/app.css';
import PetsList from './pets-list';


function App() {
  const title: string = "#FindYourPet";
  

  return (
    <div className="app">
      <h1 className='app__title'>{title}</h1>
      <PetsList/>
    </div>
  );
}

export default App;
