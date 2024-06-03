import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Page404 from './Pages/Page404';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Feature from './Pages/Feature';
import Project from './Pages/Project';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Login from './Pages/LoginPage/Login';
import Registration from './Pages/LoginPage/Registration';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useEffect, useState } from 'react';
import checkSession from './auth/authService';
import Complaint from './Pages/Complaint';
import LiveStatus from './Pages/LiveStatus';
import Alerts from './Pages/Alerts';
import ViewHistory from './Pages/ViewHistory';

function App() {


  axios.defaults.withCredentials = true;
  const [loading, setLoading] = useState(true); // New loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const checkAuth = await checkSession();
        // console.log(checkAuth);
        if (checkAuth.isAuth) {
          setIsAuthenticated(true);
        }

      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
      // console.log("isAuthenticated", isAuthenticated);
    };
    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }

  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer stacked />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!isAuthenticated ? <Registration /> : <Navigate to="/" />} />
          <Route path="/liveData" element={isAuthenticated ? <LiveStatus /> : <Navigate to="/" />} />
          <Route path="/alerts" element={isAuthenticated ? <Alerts /> : <Navigate to="/" />} />
          <Route path="/history" element={isAuthenticated ? <ViewHistory /> : <Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/complaint' element={<Complaint />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/project' element={<Project />} />
          <Route path='/service' element={<Service />} />
          <Route path='/team' element={<Team />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
