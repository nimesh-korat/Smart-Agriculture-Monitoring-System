import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Complaint() {
    const navigate = useNavigate();
    const [data, setData] = React.useState({
        name: "",
        subject: "",
        complaint: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/user/addComplaint", data);

            const { success } = response.data;
            if (success) {
                toast.success(response.data.message, {
                    autoClose: 1500,
                    onclose: () => navigate("/"),
                })
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                autoClose: 1500
            })
        }
    }
    return (
        <>
            <Header />
            {/* Page Header Start */}
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">
                        Register Complaint
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Complaint
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                            <p className="fs-5 fw-bold text-primary">Complaint Us</p>
                            <h1 className="display-5 mb-5">
                                If you have any bad experiance with our service, please connect with us
                            </h1>
                            <p className="mb-4">
                                The contact form is currently inactive. Get a functional and
                                working contact form with Ajax &amp; PHP in a few minutes. Just
                                copy and paste the files, add a little code and you're done.{" "}
                                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                onChange={handleChange}
                                                value={data.name}
                                                placeholder="Your Name"
                                                required
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                name="subject"
                                                onChange={handleChange}
                                                value={data.subject}
                                                placeholder="Subject"
                                                required
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="complaint"
                                                name="complaint"
                                                onChange={handleChange}
                                                value={data.complaint}
                                                style={{ height: 100 }}
                                                placeholder="Leave a complaint here"
                                                required
                                            />
                                            <label htmlFor="complaint">Complaint</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-4" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* Contact End */}

            <Footer />
        </>
    )
}

export default Complaint