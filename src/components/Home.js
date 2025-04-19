import React, { useState } from 'react';
import SplashScreen from '../SplashScreen';  // Import JS file from root of src
import '../SplashScreen.css'; 
function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App">
     
    
        <SplashScreen onFinish={() => setShowSplash(false)} />
      
    </div>
  );
}

export default Home;