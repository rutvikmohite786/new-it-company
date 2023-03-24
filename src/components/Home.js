import React from 'react';
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Aboutpage from "../pages/About";
import Workpage from "../pages/Work";
import Teampage from "../pages/Team";
import Inspirepage from "../pages/Inspire";
import Status from "../pages/Status";



function Home() {
    return (
        <div>
            <Navbar/>
            <section className="main-heading" id="home">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="main-heading-content col-md-12 col-sm-12 text-center">
                                <h1 className="main-heading-title">We are<span className="main-element themecolor" data-elements="Web Developers,Creative,Ambitious"></span></h1>
                                <p className="main-heading-text">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,<br />cum soluta nobis est eligendi optio cumque nihil impedit quo facilis</p>
                                <div className="btn-bar">
                                    <a href="#" className="btn btn-custom theme_background_color">Ge Started</a>
                                    <a href="#" className="btn btn-custom-outline">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Aboutpage/>
            <Workpage/>
            <Teampage/>
            <Inspirepage/>
            <Status/>
            <Footer/>

        </div>
    )
}

export default Home;