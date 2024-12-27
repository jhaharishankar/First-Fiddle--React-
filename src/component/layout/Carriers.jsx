import React from 'react'

function Carriers() {
  return (
    <>
      <div className="container-fluid carrers">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center">
              CARRIERS
            </h1>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}

      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 text-center come-how">
            <p>COME WORK <b style={{ color: "orange" }}>WITH US!</b></p>
          </div>
          <p className="come-how-para">
            First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The
            work environment enables both professional and personal growth.
          </p>
        </div>
        {/* row end */}
      </div>
      {/* container end */}

      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 text-center come-how">
            <p>HOW TO <b style={{ color: "orange" }}>APPLY!</b></p>
          </div>
          <p className="come-how-para">
            First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The
            work environment enables both professional and personal growth.
          </p>
        </div>
        {/* row end */}
      </div>
      {/* container end */}

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mt-3 ms-3">
            <h4 style={{ fontWeight: "400" }} className="mt-5 mb-1">Steep learning curve</h4>
            <p className="come-how-para">
              Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!
            </p>
            <h4 style={{ fontWeight: "400" }} className="mt-5 mb-1">Growth Opportunities</h4>
            <p className="come-how-para">
              Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!
            </p>
            <h4 style={{ fontWeight: "400" }} className="mt-5 mb-1">Exciting work environmen</h4>
            <p className="come-how-para">
              Work in a highly motivated environment with talented people. A positive work environment, ensures a productive and happy you.
            </p>
          </div>
          <div className="col-md-6 mb-5 ms-1">
            <div className="card carrer-card">
              <h5 className="mt-2 ms-4" style={{ fontWeight: "400" }}>Share your Details</h5>
              <div className="card-body">
                <form action="">
                  <div className="mb-4 mt-4">
                    <label for="name">Your Name:</label>
                    <input type="text" className="form-control" placeholder="Name" id="name" />
                  </div>
                  <div className="mb-4 mt-4">
                    <label for="email">Your Email:</label>
                    <input type="text" className="form-control" placeholder="Email" id="email" />
                  </div>
                  <div className="mb-4 mt-4">
                    <label for="phone">Your Phone:</label>
                    <input type="number" className="form-control" placeholder="Phone" id="phone" />
                  </div>
                  <div className="mb-4 mt-4">
                    <label for="msg">Message</label>
                    <input type="text" className="form-control" placeholder="Message" id="msg" />
                  </div>
                  <div className="d-md-flex justify-content-md-center">
                    <button className="btn btn-warning btn-lg text-light">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </>
  )
}

export default Carriers
