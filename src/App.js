import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./config/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/ProfileScreen";
import NoPage from "./pages/NoPage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((useAuth) => {
      if (useAuth) {
        // user is logged in
        dispatch(
          logIn({
            uid: useAuth.uid,
            email: useAuth.email,
          })
        );
        // console.log(useAuth);
      } else {
        // user is logged out
        dispatch(logOut());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {/* it will check user is logedin or not  */}
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route index path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
