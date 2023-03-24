function Contactpage() {
    return (
        <div>
            <section className="sub-form text-center" id="eight">
                <div className="container">
                    <div className="col-md-12">
                        <h3 className="title"> <span className="themecolor"> Contact Us</span></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3"></div>
                        <div className="col-md-6 center-block col-sm-6 ">
                            <form id="">
                                <div className="">
                                    <input type="email" className="form-control" placeholder="Email Address" required id="mc-email" />
                                </div>
                                <label for="mc-email" id="mc-notification"></label>

                                <div className="">
                                    <input type="text" className="form-control" placeholder="Name" required id="mc-name" />
                                </div>
                                <label for="mc-name" id="mc-notification"></label>
                               
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message"></textarea>

                                <br></br>
                                <button type="submit" classNameName="btn btn-default">SUBMIT<i classNameName="fa fa-envelope"></i> </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contactpage;