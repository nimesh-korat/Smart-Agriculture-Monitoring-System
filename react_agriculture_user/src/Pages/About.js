import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function About() {
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
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
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
              {/* <h1 class="display-1 text-primary mb-0">25</h1>
              <p class="text-primary mb-4">Year of Experience</p> */}
              <p className="mb-4">
                Smart Agriculture is newly introduced concept. Majority of
                farmers and agriculture experts are new to his concepts.
              </p>
              <Link className="btn btn-primary py-3 px-4">Explore More</Link>
            </div>
            <div
              className="col-lg-3 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-award fa-3x text-primary mb-3" />
                    <h4 className="mb-3">Award Winning</h4>
                    <span>
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo magna
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3" />
                    <h4 className="mb-3">Dedicated Team</h4>
                    <span>
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo magna
                    </span>
                  </div>
                </div>
              </div>
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
                1234
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
                1234
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Project Completed
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Dedicated Staff
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.7s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                1234
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Awards Achieved
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="fs-5 fw-bold text-primary">Our Team</p>
            <h1 className="display-5 mb-5">
              Dedicated &amp; Experienced Team Members
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                <div className="team-text">
                  <h4 className="mb-0">Doris Jordan</h4>
                  <p className="text-primary">Landscape Designer</p>
                  <div className="team-social d-flex">
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                <div className="team-text">
                  <h4 className="mb-0">Johnny Ramirez</h4>
                  <p className="text-primary">Garden Designer</p>
                  <div className="team-social d-flex">
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="team-text">
                  <h4 className="mb-0">Diana Wagner</h4>
                  <p className="text-primary">Senior Gardener</p>
                  <div className="team-social d-flex">
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link className="btn btn-square rounded-circle me-2">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      <Footer />
    </>
  );
}

export default About;
