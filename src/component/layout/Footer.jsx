import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row" style={{ backgroundColor: "#111215" }}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" style={{ width: "80%", marginTop: "3cm" }} />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h1 className="contact"><span style={{ color: "orange" }}>CONTACT</span><span style={{ color: "white" }}> US</span></h1>
              <p className="footer-para">
                We're a team focusing on redefining the way the hospitality industry works by bringing in
                concept based restaurants across India. We are truly committed to catering to the ever-changing
                cosmopolitan taste of the customer and revolutioning the F & B industry!
              </p>
              <div className="row">
                <div className="col-md-6 ">
                  <h6 className="contact" style={{ color: "orange" }}>ADDRESS</h6>
                  <p className="text-light">
                    S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi
                    110017
                  </p>
                </div>
                <div className="col-md-6 ">
                  <h6 className="contact" style={{ color: "orange" }}>ENQUIRY</h6>
                  <p className="text-light">
                    Email:
                    <b style={{ color: "orange", fontWeight: "400" }}>customercare@firstfiddle.in</b>
                  </p>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 mb-5">
                    <a href="#"><i className="fa-brands fa-facebook" style={{ color: "orange", fontSize: "40px" }}></i></a>
                    <a href="#"><i className="fa-brands fa-instagram" style={{ color: "orange", fontSize: "40px", marginLeft: "8px" }}></i></a>
                    <a href="#"><i className="fa-brands fa-whatsapp" style={{ color: "orange", fontSize: "40px", marginLeft: "8px" }}></i></a>
                  </div>
                </div>
                {/* row end */}
                <br /><br />
              </div>
              {/* row end */}
            </div>

          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </footer>
      <div className="container-fluid copyright">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6 text-light">
            <p className="mt-3" style={{ fontWeight: "250" }}>EMPLOYEE POLICIES | PRIVACY POLICY | TERMS AND CONDITIONS | BLOG | APP <br/>
              <b style={{ fontWeight: "250", marginLeft: "2.5cm" }} className="foot">COPYRIGHT © 2021 FIRST FIDDLE
                F&amp;B PRIVATE LIMITED </b>
            </p>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container-fluid end */}
    </>
  )
}

export default Footer
