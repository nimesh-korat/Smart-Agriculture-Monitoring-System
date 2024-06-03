import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Header() {
  function logout() {
    try {
      axios.post('http://localhost:8000/api/logout').then((response) => {
        window.location.reload(false);
      })
    } catch (error) {
      console.log(error);
      alert('Error: Failed to connect to server');
    }

  }
  return (
    <>
      {/* Header*/}
      <header id="header" className="header">
        <div className="top-left">
          <div className="navbar-header">
            <img
              src="images/logoo.png"
              style={{
                height: "30%",
                width: "30%",
              }}
              alt="Logo"
            />
            {/* <a class="navbar-brand"  href="./"><img src="images/logoo.png.jpeg" style="height:30%; width:30%;" alt="Logo"></a> */}
            <a href="./">

            </a>
          </div>
        </div>
        <div className="top-right">
          <div className="header-menu">
            <div className="header-left">
              {/* <div className="dropdown for-notification">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="notification"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell" />
                  <span className="count bg-danger">3</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="notification">
                  <p className="red">You have 3 Notification</p>
                  <a className="dropdown-item media" href="/#">
                    <i className="fa fa-check" />
                    <p>Server #1 overloaded.</p>
                  </a>
                  <a className="dropdown-item media" href="/#">
                    <i className="fa fa-info" />
                    <p>Server #2 overloaded.</p>
                  </a>
                  <a className="dropdown-item media" href="/#">
                    <i className="fa fa-warning" />
                    <p>Server #3 overloaded.</p>
                  </a>
                </div>
              </div> */}
              {/* <div className="dropdown for-message">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="message"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-envelope" />
                  <span className="count bg-primary">4</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="message">
                  <p className="red">You have 4 Mails</p>
                  <a className="dropdown-item media" href="/#">
                    <span className="photo media-left">
                      <img alt="avatar" src="images/avatar/1.jpg" />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Jonathan Smith</span>
                      <span className="time float-right">Just now</span>
                      <p>Hello, this is an example msg</p>
                    </div>
                  </a>
                  <a className="dropdown-item media" href="/#">
                    <span className="photo media-left">
                      <img alt="avatar" src="images/avatar/2.jpg" />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Jack Sanders</span>
                      <span className="time float-right">5 minutes ago</span>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </a>
                  <a className="dropdown-item media" href="/#">
                    <span className="photo media-left">
                      <img alt="avatar" src="images/avatar/3.jpg" />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Cheryl Wheeler</span>
                      <span className="time float-right">10 minutes ago</span>
                      <p>Hello, this is an example msg</p>
                    </div>
                  </a>
                  <a className="dropdown-item media" href="/#">
                    <span className="photo media-left">
                      <img alt="avatar" src="images/avatar/4.jpg" />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Rachel Santos</span>
                      <span className="time float-right">15 minutes ago</span>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="user-area dropdown float-right">
              <a
                href="/#"
                className="dropdown-toggle active"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="user-avatar rounded-circle"
                  src="images/admin.jpg"
                  alt="User Avatar"
                />
              </a>
              <div className="user-menu dropdown-menu">
                {/* <a className="nav-link" href="/#">
                  <i className="fa fa- user" />
                  My Profile
                </a>
                <a className="nav-link" href="/#">
                  <i className="fa fa- user" />
                  Notifications <span className="count">13</span>
                </a> */}
                <Link onClick={() => logout()} className="nav-link">
                  <i className="fa fa-power -off" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* /#header */}
    </>
  );
}

export default Header;
