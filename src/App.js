import React from "react";
import "./App.css";
import HomeScreen from "./pages.jsx/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages.jsx/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {/* it will check user is logedin or not  */}
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
