import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup() {
    //initialize navigate
    const navigate = useNavigate();

    //storing registration data from input fields 
    const [registrationData, setRegistrationData] = useState({
        username: '',
        email: '',
        role: '1',
        phoneNo: '',
        password: ''
    })

    //getting textdata from input fields
    const handleTextChange = (e) => {
        const { name, value } = e.target;

        //storing textdata from input fields
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }


    //adding user details to MongoDB
    const handleRegistrationSubmit = async (e) => {

        e.preventDefault();

        //console.log("Data: ",registrationData);
        //sending API for storing user data to MongoDB 
        try {
            const response = await axios.post('http://localhost:8000/api/signup',
                registrationData);
            console.log('Registered Succesfully!', response);

            navigate("/login");

        } catch (error) {
            console.log('Reg Error:', error);
            if (error.response && error.response.status === 400) {
                alert('Email Already Exist!');
            } else {
                alert('Error: Failed to connect to server');
            }

        }
    }

    return (
        <>
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container" >
                    <div className="login-content">
                        <div className="login-logo">
                            <p style={{ fontSize: "60px" }}>Signup</p>
                        </div>
                        <br />
                        <div className="login-form bg-dark">
                            <form onSubmit={handleRegistrationSubmit}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        name='username'
                                        onChange={handleTextChange}
                                        value={registrationData.username}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name='email'
                                        onChange={handleTextChange}
                                        value={registrationData.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone No</label>
                                    <input type="tel"
                                        className="form-control"
                                        placeholder="Phone No"
                                        name='phoneNo'
                                        onChange={handleTextChange}
                                        value={registrationData.phoneNo}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name='password'
                                        onChange={handleTextChange}
                                        value={registrationData.password}
                                    />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" required/> Agree the terms and policy
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Register</button>
                                <div className="register-link m-t-15 text-center">
                                    <p>Already have account ? <Link to="/login"> Sign in</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup