import React from 'react'

function Contact() {
  return (
    <>
    <div className="container-fluid contact-part">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h1 className="text-center">
                    CONTACT US
                </h1>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-md-6 submit">
                <h4 className="mt-4 mb-4 send">SEND US MESSAGE</h4>
                <form action="">
                    <div className="mb-3 mt-4" style={{fontWeight: "100"}}>
                        <input type="text" className="form-control" placeholder="Name*"/>
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="email" className="form-control" placeholder="Email*"/>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" placeholder="Phone*"/>
                    </div>
                    <div className="mb-3">
                        <input type="message" className="form-control" placeholder="Message*"/>
                    </div>
                    <div className="d-md-flex justify-content-md-center">
                        <button className="btn btn-warning btn-lg text-light">Submit</button>
                    </div>
                </form>
                {/* form end */}
            </div>
            <div className="col-md-5 mt-4 ms-1 contact-info">
                <h2>CONTACT INFO</h2>
                <h6 style={{color: "orange"}}>Address</h6>
                <p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>
                <h6 style={{color: "orange"}}>For Franchise Enquiry</h6>
                <p>MOBILE: <b style={{color: "orange"}}>+91 9313663486</b></p>
                <p>EMAIL: <b style={{color: "orange"}}> franchise@firstfiddle.in</b></p>
                <h6 style={{color: "orange"}}>For HR Enquiry</h6>
                <p>MOBILE: <b style={{color: "orange"}}>+91 9999304427</b></p>
                <p>EMAIL: <b style={{color: "orange"}}>hr@firstfiddle.in</b></p>
                <h6 style={{color: "orange"}}>For Other Enquiry</h6>
                <p>PHONE: <b style={{color: "orange"}}>7676380000</b></p>
                <p>EMAIL: <b style={{color: "orange"}}>customercare@firstfiddle.in</b></p>
                <p>Open: Monday - Saturday 10:30 - 19:30</p>
            </div>
        </div>
        {/* row end */}
    </div>
    {/* container end */}
    </>
  )
}

export default Contact
