import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import './SplashScreen.css';
function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App">
     
    
        <SplashScreen onFinish={() => setShowSplash(false)} />
      
    </div>
  );
}

export default App;
