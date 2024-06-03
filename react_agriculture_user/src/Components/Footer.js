import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href='/#'><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href='/#'><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href='/#'><i className="fab fa-youtube" /></a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href='/#'><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Services</h4>
              <a className="btn btn-link" href='/#'>Soil Moisture</a>
              <a className="btn btn-link" href='/#'>Temperature</a>
              <a className="btn btn-link" href='/#'>Water-Level</a>
              <a className="btn btn-link" href='/#'>Crop-Soil</a>
              <a className="btn btn-link" href='/#'>Weather-Station</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link className="btn btn-link" to='/about'>About Us</Link>
              <Link className="btn btn-link" to='/contact'>Contact Us</Link>
              <Link className="btn btn-link" to='/service'>Our Services</Link>
              <Link className="btn btn-link" to>Terms &amp; Condition</Link>
              <Link className="btn btn-link" to>Support</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative w-100">
                <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </>
  )
}

export default Footer