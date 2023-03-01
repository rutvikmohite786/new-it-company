import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/animate.css';
import '../css/reset.css';
import '../css/color/rose.css'

const Navbar = () => {
   return (
      <>
         <div className="wrapper">
            <nav className="nim-menu navbar navbar-default navbar-fixed-top navbar-light bg-light">
               <div className="container">
                  <div className="navbar-header">
                     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                     </button>
                     <a className="navbar-brand" href="index.html">N<span className="themecolor">i</span>M</a>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     <ul className="nav navbar-nav navbar-right">
                        <li><Link classNameName="nav-link" to="/">Home</Link></li>
                        <li><Link classNameName="nav-link" to="/about">About</Link></li>
                        <li><Link classNameName="nav-link" to="/work">Our Work</Link></li>
                        <li><Link classNameName="nav-link" to="/team">Team</Link></li>
                        <li><a href="#four" className="page-scroll">Inspiration</a></li>
                        <li><a href="#five" className="page-scroll">Status</a></li>
                        <li><a href="#six" className="page-scroll">Testimonials</a></li>
                        <li><a href="#seven" className="page-scroll">Services</a></li>
                        <li><a href="#eight" className="page-scroll">Contact</a></li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
         <Outlet />
      </>
   )
};

export default Navbar; 