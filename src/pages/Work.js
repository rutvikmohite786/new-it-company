import React from 'react';

function Workpage() {
    return (
        <div>
            <section class="recent-works text-center" id="two">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="title">Recent <span class="themecolor">Works</span></h3>
                            <p class="a-slog">Lorem ipsum dolor sit amet ne onsectetuer adipiscing elit. Aenean commodo ligula eget dolor in tashin ty</p>
                        </div>
                    </div>

                    <div class="gap"></div>

                    <div class="row">
                        <div class="col-sm-4 port-item margin-bottom">
                            <div class="item-img-wrap">
                                <img src={require('../images/work-1.jpg')} class="img-responsive" alt="workimg" />
                                <div class="item-img-overlay">
                                    <a href={require('../images/work-1.jpg')} class="show-image">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div class="work-desc">
                                <h3><a href="#">Mockup Design</a></h3>
                                <span>Photoshop</span>
                            </div>
                        </div>

                        <div class="col-sm-4 port-item margin-bottom">
                            <div class="item-img-wrap">
                                <img src={require('../images/work-2.jpg')} class="img-responsive" alt="workimg" />
                                <div class="item-img-overlay">
                                    <a href={require('../images/work-2.jpg')} class="show-image">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div class="work-desc">
                                <h3><a href="#">Graphic Design</a></h3>
                                <span>Illustrator</span>
                            </div>
                        </div>

                        <div class="col-sm-4 port-item margin-bottom">
                            <div class="item-img-wrap">
                                <img src={require('../images/work-3.jpg')} class="img-responsive" alt="workimg" />
                                <div class="item-img-overlay">
                                    <a href={require('../images/work-3.jpg')} class="show-image">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div class="work-desc">
                                <h3><a href="#">Web Design</a></h3>
                                <span>Html / Css</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 text-center">
                            <a href="#" class="btn btn-custom theme_background_color">Load More</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Workpage;