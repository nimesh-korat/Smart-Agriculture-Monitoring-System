import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Registration() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = React.useState({
    username: "",
    email: "",
    area: "",
    phoneNo: "",
    role: "1",
    password: "",
    deviceId: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup", registerData
      )

      const { success } = response.data;
      if (success) {
        toast.success("Register Successful", {
          autoClose: 1500, onClose: () => navigate("/login"),
        });
      }
    } catch (error) {
      console.log("Reg Err: ", error);
      if (error.response) {
        toast.error(error.response.data.message, {
          autoClose: 1500,
        })
      }
    }
  }
  return (
    <>
      <div className="wrapper" style={{ maxWidth: "500px" }}>
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/farmer-png/connor-handsome-farmer-farmer-man-vector-20.png"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">Agro Farmz</div>
        <form onSubmit={handleSubmit} className="p-3 mt-3">
          <div className="row ">
            <div className="col-6">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-user" />
                <input
                  type="text"
                  name="username"
                  id="userName"
                  value={registerData.userName}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-at" />
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleChange}
                  id="pwd"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-phone" />
                <input
                  type="tel"
                  value={registerData.phoneNo}
                  onChange={handleChange}
                  name="phoneNo"
                  placeholder="Phone No"
                />
              </div>
            </div>
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-key" />
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleChange}
                  id="pwd"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-location" />
                <input
                  type="text"
                  value={registerData.area}
                  onChange={handleChange}
                  name="area"
                  placeholder="Area Name"
                />
              </div>
            </div>
            <div className="col-6 ">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-usb-drive" />
                <input
                  type="text"
                  name="deviceId"
                  value={registerData.deviceId}
                  onChange={handleChange}
                  id="pwd"
                  placeholder="Device ID"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn mt-3">Signup</button>
        </form>
        <div className="text-center fs-6">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Registration;
