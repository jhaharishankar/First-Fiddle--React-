import Slider from "./layout/Slider"

function Home() {
    return (
        <>
            <Slider />

            <div className="container">
                <h2 className="welcome-heading">WELCOME TO <b style={{ color: "orange" }}>FIRST FIDDLE</b></h2> <br />
                <div className="row">
                    <div className="col-md-7">
                        <p className="head-para">
                            First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector,
                            is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and
                            Bougie in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands,
                            and franchises across India.
                        </p>
                        <center>
                            <button className="btn btn-warning btn-lg mt-5 mb-3 text-light">JOIN THE JOURNEY</button>
                        </center>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" className="head-img" />
                    </div>
                </div>
                {/* row end */}
            </div>
            {/* container end */}
            <br /><br /><br />
            <div className="container-fluid mediabg-img">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-light">
                        <h1 className="text-center media">MEDIA MENTIONS</h1>
                        <p className="media-para">We've been making splashes and headlines since 1999 for our innovative concepts
                            and aesthetic
                            ideations, experimental gastronomic affairs, and exotic mixology. We've made our way from the heart
                            of the country into the hearts of its people!</p>
                        <center>
                            <button className="btn btn-warning btn-lg mt-5" style={{ marginBottom: "2cm" }}>Know More</button>
                        </center>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                {/* row end */}
            </div>
            {/* container-fluid end */}
            <br /><br /><br />
            <div className="container">
                <h1 className="text-center exp">EXPLORE <b style={{ color: "orange" }}>OUR BRANDS</b></h1>
                <div className="row">
                    <div class="col-md-3">
                        <div className="card shadow mt-4">
                            <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow mt-4">
                            <img src="https://pn-paul.netlify.app/image/ffpic2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow mt-4">
                            <img src="https://pn-paul.netlify.app/image/ffpic3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow mt-4">
                            <img src="https://pn-paul.netlify.app/image/ffpic4.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* row end */}
            </div>
            {/* container end */}
            <br /><br /><br /><br />
            <div className="container-fluid expbg-img">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-light">
                        <h1 className="text-center media">EXPERIENCE OUR CONCEPTS</h1>
                        <p className="media-para">
                            Moving beyond just offering Indian, international, and fusion cuisines, our
                            restaurants create magic with our special events, mood-setting music, Insta-worthy aesthetics, and
                            tongue-tingling signatures! Head over to experience it for yourself!
                        </p>
                        <center>
                            <button className="btn btn-warning btn-lg mt-5" style={{ marginBottom: "2cm" }}>Know More</button>
                        </center>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                {/* row end */}
            </div>
            {/* container fluid end */}
        </>
    )
}

export default Home
