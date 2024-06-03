import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {

  const location = window.location.pathname;
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    switch (location) {
      case "/":
        setActiveItem("Home");
        break;
      case "/IRSensor.html":
        setActiveItem("IRSensor");
        break;
      case "/WaterSensor.html":
        setActiveItem("WaterSensor");
        break;
      case "/SmokeSensor.html":
        setActiveItem("SmokeSensor");
        break;
      case "/FlameSensor.html":
        setActiveItem("FlameSensor");
        break;
      case "/SoilSensor.html":
        setActiveItem("SoilSensor");
        break;
      case "/feedback.html":
        setActiveItem("feedback");
        break;
      case "/complaint.html":
        setActiveItem("complaint");
        break;

      default:
        setActiveItem("Home");
        break;
    }
  }, [location])

  return (
    <>
      <aside id="left-panel" className="left-panel">
        <br />
        <nav className="navbar navbar-expand-sm navbar-default">
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={activeItem === "Home" ? "active" : ""}>
                <Link to="/">
                  <i className="menu-icon fa fa-laptop" />
                  Dashboard
                </Link>
              </li>
              <li className="menu-title">SENSORS</li>
              {/* /.menu-title */}
              <li className={activeItem === "IRSensor" ? "active" : ""}>
                <Link to="/IRSensor.html">
                  <i
                    className="fas fa-rss-square"
                    style={{ marginRight: "5%" }}
                  />
                  IR sesnor
                </Link>
              </li>
              <li className={activeItem === "WaterSensor" ? "active" : ""}>
                <Link to="/WaterSensor.html">
                  <i
                    className="fa-solid fa-droplet"
                    style={{ marginRight: "5%" }}
                  />
                  Water level sesnor
                </Link>
              </li>
              <li className={activeItem === "SmokeSensor" ? "active" : ""}>
                <Link to="/SmokeSensor.html">
                  <i
                    className="fa-solid fa-fire-flame-curved"
                    style={{ marginRight: "5%" }}
                  />
                  Smoke sesnor
                </Link>
              </li>
              <li className={activeItem === "FlameSensor" ? "active" : ""}>
                <Link to="/FlameSensor.html">
                  <i
                    className="fa-solid fa-fire"
                    style={{ marginRight: "5%" }}
                  />
                  Flame sesnor
                </Link>
              </li>
              <li className={activeItem === "SoilSensor" ? "active" : ""}>
                <Link to="/SoilSensor.html">
                  <i
                    className="fa-solid fa-temperature-low"
                    style={{ marginRight: "5%" }}
                  />
                  Soil sesnor
                </Link>
              </li>
              <li className={activeItem === "feedback" ? "active" : ""}>
                <Link to="/feedback.html">
                  <i
                    className="fa-solid fa-comment"
                    style={{ marginRight: "5%" }}
                  />
                  Feedbacks
                </Link>
              </li>
              <li className={activeItem === "complaint" ? "active" : ""}>
                <Link to="/complaint.html">
                  <i
                    className="fa-solid fa-user-check"
                    style={{ marginRight: "5%" }}
                  />
                  Complaints
                </Link>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
