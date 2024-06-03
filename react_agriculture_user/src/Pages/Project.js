import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Project() {
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
            Projects
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Projects Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="fs-5 fw-bold text-primary">Our Projects</p>
            <h1 className="display-5 mb-5">All Sensor Of Smart Agriculture</h1>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
              <ul className="list-inline rounded mb-5" id="portfolio-flters">
                <li className="mx-2 active" data-filter="*">
                  All
                </li>
                <li className="mx-2" data-filter=".first">
                  Complete Projects
                </li>
                <li className="mx-2" data-filter=".second">
                  Ongoing Projects
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container">
            <div
              className=" col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/soil moisture.jpg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Soil Moisture Sensor</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-3"
                      to="img/soil moisture.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                    <Link className="btn btn-lg-square rounded-circle mx-3" to>
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/temperature.jpg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Temperature Sensor</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="img/temperature.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                    <Link className="btn btn-lg-square rounded-circle mx-2" to>
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/waterlevel.jpg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Water-Level Sensor</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="img/waterlevel.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                    <Link className="btn btn-lg-square rounded-circle mx-2" to>
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/ultra.jpeg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Ultrasonic Sensor</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="img/ultra.jpeg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                    <Link className="btn btn-lg-square rounded-circle mx-2" to>
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/crop.jpg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Crop Soil Sensor</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="img/crop.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                    <Link className="btn btn-lg-square rounded-circle mx-2" to>
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/weather.jpg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Weather Sensor</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="img/weather.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                    <Link className="btn btn-lg-square rounded-circle mx-2" to>
                      <i className="fa fa-link" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects End */}
      <Footer />
    </>
  );
}

export default Project;
