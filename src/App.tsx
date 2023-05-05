import React from 'react';
import Students from './components/students/students';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Students toastHandler={() => {}} />
    </div>
  );
}

export default App;
