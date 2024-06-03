import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Service() {
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
            Services
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="fs-5 fw-bold text-primary">Our Services</p>
            <h1 className="display-5 mb-5">Services That We Offer For You</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img
                    className="img-fluid"
                    src="img/soil moisture.jpg"
                    alt=""
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/soil-sensor.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Soil Moisture</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  {/* <Link class="btn btn-sm" to=""><i class="fa fa-plus text-primary me-2"></i>Read More</Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src="img/temperature.jpg" alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/temperature-sensor.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Temperature</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  {/* <Link class="btn btn-sm" to=""><i class="fa fa-plus text-primary me-2"></i>Read More</Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src="img/waterlevel.jpg" alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/water-level-sensor.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Water-Level</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  {/* <Link class="btn btn-sm" to=""><i class="fa fa-plus text-primary me-2"></i>Read More</Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src="img/ultra.jpeg" alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/ultra_sensor.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Ultrasonic</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  {/* <Link class="btn btn-sm" to=""><i class="fa fa-plus text-primary me-2"></i>Read More</Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src="img/crop.jpg" alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/crop-sensor.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Crop Data</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  {/* <Link class="btn btn-sm" to=""><i class="fa fa-plus text-primary me-2"></i>Read More</Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <img className="img-fluid" src="img/weather.jpg" alt="" />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <img
                      className="img-fluid"
                      src="img/icon/weather-station.png"
                      alt="Icon"
                    />
                  </div>
                  <h4 className="mb-3">Weather-Station</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  {/* <Link class="btn btn-sm" to=""><i class="fa fa-plus text-primary me-2"></i>Read More</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      <Footer />
    </>
  );
}

export default Service;
