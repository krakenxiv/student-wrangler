import React, { ReactNode, useState } from 'react';
import Students from './components/students/students';
import Header from './components/header/header';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Students toastHandler={() => {}} />
    </div>
  );
}

export default App;
