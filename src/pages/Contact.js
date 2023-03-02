function Contactpage() {
    return (
        <div>
            <section class="sub-form text-center" id="eight">
                <div class="container">
                    <div class="col-md-12">
                        <h3 class="title"> <span class="themecolor"> Contact Us</span></h3>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-sm-3"></div>
                        <div class="col-md-6 center-block col-sm-6 ">
                            <form id="">
                                <div class="">
                                    <input type="email" class="form-control" placeholder="Email Address" required id="mc-email" />
                                </div>
                                <label for="mc-email" id="mc-notification"></label>

                                <div class="">
                                    <input type="text" class="form-control" placeholder="Name" required id="mc-name" />
                                </div>
                                <label for="mc-name" id="mc-notification"></label>
                               
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message"></textarea>

                                <br></br>
                                <button type="submit" className="btn btn-default">SUBMIT<i className="fa fa-envelope"></i> </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contactpage;