import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Contact() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
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
      const response = await axios.post("http://localhost:8000/api/user/addFeedback", data);

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
            Contact Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
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
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <p className="fs-5 fw-bold text-primary">Contact Us</p>
              <h1 className="display-5 mb-5">
                If You Have Any Query, Please Contact Us
              </h1>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp; PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
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
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={data.message}
                        style={{ height: 100 }}
                        required
                      />
                      <label htmlFor="message">Message</label>
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
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: 450 }}
            >
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6069876701954!2d72.55580477509228!3d23.038198179162876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ff3a38c353%3A0xdabe316634ef7e5e!2sInfoLabz!5e0!3m2!1sen!2sin!4v1710393423244!5m2!1sen!2sin"
                  style={{ minHeight: 450, border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="was"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      <Footer />
    </>
  );
}

export default Contact;
