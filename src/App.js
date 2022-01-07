import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, auth } from './firebase';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Markets from './Pages/Markets/Markets';
import Login from './Pages/Login/Login';

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Signed in.");
        setIsLoggedIn(true);
      } else {
        console.log("Signed out.")
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      {
        isLoggedIn ?
          (
            <Markets />
          ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
