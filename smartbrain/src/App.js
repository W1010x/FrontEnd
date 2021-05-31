import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo.js';

import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Logo/>
      {/*<ImageRecognition/>
      <FaceRecognition/>} */}
    </div>
  );
}

export default App;
