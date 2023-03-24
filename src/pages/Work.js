import React from 'react';

function Workpage() {
    return (
        <div>
            <section className="recent-works text-center" id="two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">Recent <span className="themecolor">Works</span></h3>
                            <p className="a-slog">Lorem ipsum dolor sit amet ne onsectetuer adipiscing elit. Aenean commodo ligula eget dolor in tashin ty</p>
                        </div>
                    </div>

                    <div className="gap"></div>

                    <div className="row">
                        <div className="col-sm-4 port-item margin-bottom">
                            <div className="item-img-wrap">
                                <img src={require('../images/work-1.jpg')} className="img-responsive" alt="workimg" />
                                <div className="item-img-overlay">
                                    <a href={require('../images/work-1.jpg')} className="show-image">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="work-desc">
                                <h3><a href="#">Mockup Design</a></h3>
                                <span>Photoshop</span>
                            </div>
                        </div>

                        <div className="col-sm-4 port-item margin-bottom">
                            <div className="item-img-wrap">
                                <img src={require('../images/work-2.jpg')} className="img-responsive" alt="workimg" />
                                <div className="item-img-overlay">
                                    <a href={require('../images/work-2.jpg')} className="show-image">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="work-desc">
                                <h3><a href="#">Graphic Design</a></h3>
                                <span>Illustrator</span>
                            </div>
                        </div>

                        <div className="col-sm-4 port-item margin-bottom">
                            <div className="item-img-wrap">
                                <img src={require('../images/work-3.jpg')} className="img-responsive" alt="workimg" />
                                <div className="item-img-overlay">
                                    <a href={require('../images/work-3.jpg')} className="show-image">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="work-desc">
                                <h3><a href="#">Web Design</a></h3>
                                <span>Html / Css</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="#" className="btn btn-custom theme_background_color">Load More</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Workpage;