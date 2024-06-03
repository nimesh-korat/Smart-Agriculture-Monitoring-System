import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Home() {
  return (
    <>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        />
      </div> */}

      <Header />

      {/* Carousel Start */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/agr2.jpg" alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        The Future of Smart Farming is Here!
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div
              className="col-lg-3 col-md-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                className="img-fluid rounded"
                data-wow-delay="0.1s"
                src="img/about.jpg"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 col-md-7 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h1 className="display-5 mb-4 ">Smart Agriculture</h1>
              <p className="mb-4">
                Smart Agriculture is newly introduced concept. Majority of
                farmers and agriculture experts are new to his concepts.
              </p>
              <a className="btn btn-primary py-3 px-4" href='/#'>
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Facts Start */}
      <div
        className="container-fluid facts my-5 py-5"
        data-parallax="scroll"
        data-image-src="/img/agr1.png"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                150
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Happy Clients
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                50
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Project Complete
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                100
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Dedicated Staff
              </span>
            </div>
            {/* <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
              <h1 class="display-4 text-white" data-toggle="counter-up">1234</h1>
              <span class="fs-5 fw-semi-bold text-light">Awards Achieved</span>
          </div> */}
          </div>
        </div>
      </div>
      {/* Facts End */}
      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
              <h1 className="display-5 mb-4">
                Few Reasons Why People Choosing Us!
              </h1>
              {/* <p class="mb-4">We make a</p>
              <a class="btn btn-primary py-3 px-4" href="">Explore More</a> */}
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div
                        className="text-center rounded py-5 px-4"
                        style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                      >
                        <div
                          className="btn-square bg-light rounded-circle mx-auto mb-4"
                          style={{ width: 90, height: 90 }}
                        >
                          <i className="fa fa-check fa-3x text-primary" />
                        </div>
                        <h4 className="mb-0">100% Satisfaction</h4>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div
                        className="text-center rounded py-5 px-4"
                        style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                      >
                        <div
                          className="btn-square bg-light rounded-circle mx-auto mb-4"
                          style={{ width: 90, height: 90 }}
                        >
                          <i className="fa fa-users fa-3x text-primary" />
                        </div>
                        <h4 className="mb-0">Dedicated Team</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                  <div
                    className="text-center rounded py-5 px-4"
                    style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                  >
                    <div
                      className="btn-square bg-light rounded-circle mx-auto mb-4"
                      style={{ width: 90, height: 90 }}
                    >
                      <i className="fa fa-tools fa-3x text-primary" />
                    </div>
                    <h4 className="mb-0">Modern Equipment</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
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
                  {/* <a class="btn btn-sm" href=""><i class="fa fa-plus text-primary me-2"></i>Read More</a> */}
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
                  {/* <a class="btn btn-sm" href=""><i class="fa fa-plus text-primary me-2"></i>Read More</a> */}
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
                  {/* <a class="btn btn-sm" href=""><i class="fa fa-plus text-primary me-2"></i>Read More</a> */}
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
                  {/* <a class="btn btn-sm" href=""><i class="fa fa-plus text-primary me-2"></i>Read More</a> */}
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
                  {/* <a class="btn btn-sm" href=""><i class="fa fa-plus text-primary me-2"></i>Read More</a> */}
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
                  {/* <a class="btn btn-sm" href=""><i class="fa fa-plus text-primary me-2"></i>Read More</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
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
            {/* <div class="col-12 text-center">
              <ul class="list-inline rounded mb-5" id="portfolio-flters">
                  <li class="mx-2 active" data-filter="*">All</li>
                  <li class="mx-2" data-filter=".first">Complete Projects</li>
                  <li class="mx-2" data-filter=".second">Ongoing Projects</li>
              </ul>
          </div> */}
          </div>
          <div className="row g-4 portfolio-container">
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/soil moisture.jpg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Soil Moisture Sensor</h4>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/soil moisture.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a className="btn btn-lg-square rounded-circle mx-2" href='/#'>
                      <i className="fa fa-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src="img/temperature.jpg" alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">Temperature Sensor</h4>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/temperature.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a className="btn btn-lg-square rounded-circle mx-2" href='/#'>
                      <i className="fa fa-link" />
                    </a>
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
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/waterlevel.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a className="btn btn-lg-square rounded-circle mx-2" href='/#'>
                      <i className="fa fa-link" />
                    </a>
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
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/ultra.jpeg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a className="btn btn-lg-square rounded-circle mx-2" href='/#'>
                      <i className="fa fa-link" />
                    </a>
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
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/crop.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a className="btn btn-lg-square rounded-circle mx-2" href='/#'>
                      <i className="fa fa-link" />
                    </a>
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
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="img/weather.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a className="btn btn-lg-square rounded-circle mx-2" href='/#'>
                      <i className="fa fa-link" />
                    </a>
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

export default Home;
