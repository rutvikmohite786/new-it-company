import React from 'react';
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Aboutpage from "../pages/About";
import Workpage from "../pages/Work";




function Home() {
    return (
        <div>
            <Navbar/>
            <section class="main-heading" id="home">
                <div class="overlay">
                    <div class="container">
                        <div class="row">
                            <div class="main-heading-content col-md-12 col-sm-12 text-center">
                                <h1 class="main-heading-title">We are<span class="main-element themecolor" data-elements="Web Developers,Creative,Ambitious"></span></h1>
                                <p class="main-heading-text">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,<br />cum soluta nobis est eligendi optio cumque nihil impedit quo facilis</p>
                                <div class="btn-bar">
                                    <a href="#" class="btn btn-custom theme_background_color">Ge Started</a>
                                    <a href="#" class="btn btn-custom-outline">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Aboutpage/>
            <Workpage/>
            <Footer/>

        </div>
    )
}

export default Home;