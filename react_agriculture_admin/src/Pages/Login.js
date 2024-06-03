import axios from "axios";
import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Login() {
    //initialize navigate

    //hook for Storing email & password
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        role: '0',
    });

    //getting textdata from input fields
    const handleLoginChange = (e) => {
        const { name, value } = e.target;

        //storing textdata from input fields
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }

    //callback function to FIRE login API
    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        //calling Login API
        try {
            const response = await axios.post('http://localhost:8000/api/login', loginData);

            //initializing response data from API response
            const { success, message } = response.data;
            console.log(success);

            //if success then navigate to home page
            if (success) {
                window.location.reload(false);
            } else {
                console.log(message);
                alert(message);
            }
        } catch (error) {
            console.log("Login Err: ", error);
            alert(error.response.data.message);
        }

    }
    return (
        <>
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <p style={{ fontSize: "60px" }}>Login</p>
                        </div>
                        <br />
                        <br />
                        <div className="login-form bg-dark">
                            <form onSubmit={handleLoginSubmit}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name='email'
                                        onChange={handleLoginChange}
                                        value={loginData.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name='password'
                                        onChange={handleLoginChange}
                                        value={loginData.password}
                                    />
                                </div>
                                {/* <div className="checkbox">
                                    <label className="pull-right">
                                        <a href="/#">Forgotten Password?</a>
                                    </label>
                                </div> */}
                                <button
                                    type="submit"
                                    className="btn btn-success btn-flat m-b-30 m-t-30"
                                >
                                    Sign in
                                </button>
                                {/* <div className="register-link m-t-15 text-center">
                                    <p>
                                        Don't have account ?
                                        <Link to="/signup"> Sign Up Here</Link>
                                    </p>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;