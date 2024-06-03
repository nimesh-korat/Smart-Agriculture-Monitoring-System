import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import checkSession from "../auth/authService";
import axios from "axios";
import { toast } from "react-toastify";

function Header() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const checkLoginStatus = async () => {
      setIsLoading(true);
      const chechAuth = await checkSession();
      const loggedIn = chechAuth.isAuth;
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
    };

    checkLoginStatus();

    switch (location.pathname) {
      case "/":
        setActiveItem("Home");
        break;
      case "/about":
        setActiveItem("About");
        break;
      case "/service":
        setActiveItem("Service");
        break;
      case "/project":
        setActiveItem("Project");
        break;
      case "/contact":
        setActiveItem("Contact");
        break;
      case "/complaint":
        setActiveItem("Complaint");
        break;
      case "/feature":
        setActiveItem("Feature");
        break;
      case "/team":
        setActiveItem("Team");
        break;
      case "/alerts":
        setActiveItem("ViewAlerts");
        break;
      case "/liveData":
        setActiveItem("LiveData");
        break;
      case "/history":
        setActiveItem("History");
        break;

      default:
        setActiveItem("Home");
        break;
    }
  }, [location.pathname]);

  const handleLogout = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("http://localhost:8000/api/logout");
      toast.success("Logout Successful", {
        autoClose: 1000,
        onClose: () => window.location.reload(),
        position: "top-left",
      });
    } catch (error) {
      console.log("Logout Err: ", error);
      toast.error(error.response.data.message, {
        autoClose: 1500,
        onClose: () => window.location.reload(),
        position: "top-left",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2" />
              <span>+91 12345 56789</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2" />
              <span>AgroFarmz@gamil.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Follow Us:</span>
              <Link className="btn btn-link text-light" to>
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-link text-light" to>
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-link text-light" to>
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link className="btn btn-link text-light" to>
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0">Agro Farmz</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link  ${activeItem === "Home" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-item nav-link  ${activeItem === "About" ? "active" : ""}`}>
              About
            </Link>
            <Link to="/service" className={`nav-item nav-link  ${activeItem === "Service" ? "active" : ""}`}>
              Services
            </Link>
            <Link to="/project" className={`nav-item nav-link  ${activeItem === "Project" ? "active" : ""}`}>
              Projects
            </Link>

            {
              isLoggedIn ? (
                <div className="nav-item dropdown">
                  <Link
                    className={`nav-link dropdown-toggle  ${activeItem === "LiveData" || activeItem === "ViewAlerts" || activeItem === "History" ? "active" : ""}"}
                    data-bs-toggle="dropdown`}
                  >
                    View Data
                  </Link>
                  <div className="dropdown-menu bg-light m-0">
                    <Link to="/liveData" className={`dropdown-item  ${activeItem === "LiveData" ? "active" : ""}`}>
                      Live Data
                    </Link>
                    <Link to="/alerts" className={`dropdown-item  ${activeItem === "ViewAlerts" ? "active" : ""}`}>
                      View Alerts
                    </Link>
                    <Link to="/history" className={`dropdown-item  ${activeItem === "History" ? "active" : ""}`}>
                      View History
                    </Link>
                  </div>
                </div>
              ) : null
            }



            <div className="nav-item dropdown">
              <Link

                className={`nav-link dropdown-toggle  ${activeItem === "Feature" || activeItem === "Team" ? "active" : ""}"}
                data-bs-toggle="dropdown`}
              >
                Pages
              </Link>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/feature" className={`dropdown-item  ${activeItem === "Feature" ? "active" : ""}`}>
                  Features
                </Link>
                <Link to="/team" className={`dropdown-item  ${activeItem === "Team" ? "active" : ""}`}>
                  Our Team
                </Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle  ${activeItem === "Contact" || activeItem === "Complaint" ? "active" : ""}"}
                data-bs-toggle="dropdown`}
              >
                Get in Touch
              </Link>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/contact" className={`dropdown-item  ${activeItem === "Contact" ? "active" : ""}`}>
                  Contact
                </Link>
                <Link to="/complaint" className={`dropdown-item  ${activeItem === "Complaint" ? "active" : ""}`}>
                  Complaint
                </Link>
              </div>
            </div>

            {
              isLoggedIn ? (
                <Link onClick={handleLogout} className={`nav-item nav-link  ${activeItem === "Login" ? "active" : ""}`}>
                  Logout
                </Link>
              ) : (
                <Link to="/login" className={`nav-item nav-link  ${activeItem === "Login" ? "active" : ""}`}>
                  Login
                </Link>
              )
            }

            {/* </div>
      <Link to="" class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></Link>
  </div> */}
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default Header;
