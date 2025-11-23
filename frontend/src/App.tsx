import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
        <p className="DesignedBy">Designed by</p>
        <p className="Students">Students.</p>
    </div>
  );
}
function  NavBar(){
  return(
    <div className="Nav">
        <img src="/images/icons/UniVersePic.png" className="Icon" alt="UniVerse logo" />
        <div className="LoginSignupButton">
          <button className="LoginSignupStyle">Login</button>
          <button className="LoginSignupStyle">Sign Up</button>
        </div>
    </div>
  );
}
function MainContent(){
  return(
    <div>
      
    </div>
  );
}

export default App;
export { NavBar };
export { MainContent};
