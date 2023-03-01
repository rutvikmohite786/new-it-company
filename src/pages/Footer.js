import React from 'react';

function Footer() {
    return (
        <div>
            <section className="sub-form text-center" id="eight">
                <div className="container">
                    <div className="col-md-12">
                        <h3 className="title">Subscribe to our <span className="themecolor"> News letter</span></h3>
                        <p className="lead">Lorem ipsum dolor sit amet ne onsectetuer adipiscing elit. Aenean commodo ligula eget dolor in tashin ty</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3"></div>
                        <div className="col-md-6 center-block col-sm-6 ">
                            <form id="mc-form">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email Address" required id="mc-email" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn btn-default">SUBSCRIBE <i className="fa fa-envelope"></i> </button>
                                    </span> </div>
                                <label for="mc-email" id="mc-notification"></label>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="site-footer section-spacing text-center " id="eight">

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="footer-links"><a href="#">Terms of Use</a> <a href="#">Privacy Policy</a></p>
                        </div>
                        <div className="col-md-4"> <small>&copy; 2015 Nim. All rights reserved.</small></div>
                        <div className="col-md-4">

                            <ul className="social">
                                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter "></i></a></li>
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                            </ul>


                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;