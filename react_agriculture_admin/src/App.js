import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import IRSensor from "./Pages/IRSensor";
import WaterSensor from "./Pages/WaterSensor";
import SmokeSensor from "./Pages/SmokeSensor";
import FlameSensor from "./Pages/FlameSensor";
import SoilSensor from "./Pages/SoilSensor";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useEffect, useState } from "react";
import axios from "axios";
import checkSession from './auth/authService'; // Import the checkSession function
import Home from "./Pages/Home/Home";
import ViewFeedback from "./Pages/ViewFeedback";
import ViewComplaint from "./Pages/ViewComplaint";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  axios.defaults.withCredentials = true;


  //for checking session 
  useEffect(() => {
    const authenticateUser = async () => {

      try {
        const isAuthenticated = await checkSession();
        setIsAuthenticated(isAuthenticated);

      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };
    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }
  }, [isAuthenticated]);

  return (
    loading ? <h3>Loading...</h3> :
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={!isAuthenticated ? < Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!isAuthenticated ? < Signup /> : <Navigate to="/" />} />
            <Route path="/" element={isAuthenticated ? < Home /> : <Navigate to="/login" />} />
            <Route path="/IRSensor.html" element={isAuthenticated ? < IRSensor /> : <Navigate to="/login" />} />
            <Route path="/WaterSensor.html" element={isAuthenticated ? < WaterSensor /> : <Navigate to="/login" />} />
            <Route path="/SmokeSensor.html" element={isAuthenticated ? < SmokeSensor /> : <Navigate to="/login" />} />
            <Route path="/FlameSensor.html" element={isAuthenticated ? < FlameSensor /> : <Navigate to="/login" />} />
            <Route path="/SoilSensor.html" element={isAuthenticated ? < SoilSensor /> : <Navigate to="/login" />} />
            <Route path="/feedback.html" element={isAuthenticated ? < ViewFeedback /> : <Navigate to="/login" />} />
            <Route path="/complaint.html" element={isAuthenticated ? < ViewComplaint /> : <Navigate to="/login" />} />
            <Route path="*" element={isAuthenticated ? <h1 style={{ textAlign: "center" }}>404 page not found</h1> : <Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
