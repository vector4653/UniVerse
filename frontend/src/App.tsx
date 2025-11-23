import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
        <p className="DesignedBy">Designed by</p>
        <p className="Students">Students.</p>
    </div>
  );
}
function  NavBar(){
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return(
    <>
      <div className="Nav">
        <img src="/images/icons/UniVersePic.png" className="Icon" alt="UniVerse logo" />
          <div className="LoginSignupButton">
            <button className="LoginSignupStyle" onClick={() => setShowLogin(true)}>Login</button>
            <button className="LoginSignupStyle" onClick={() => setShowSignup(true)}>Sign Up</button>
          </div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} onSwitchToSignup={handleSwitchToSignup} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} onSwitchToLogin={handleSwitchToLogin} />}
    </>
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
