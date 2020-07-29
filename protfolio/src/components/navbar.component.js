import React from 'react';
import logo from '../images/logos/log.png';
import "bootstrap/dist/css/bootstrap.min.css";


// import './App.css';

class Navbar extends React.Component {
render(){
  return (
    <nav  collapseOnSelect className="navbar navbar-dark fixed-top bg-dark navbar-expand-lg  ">
    <a className="navbar-brand justify-content-start"><img src={logo} width="40px"/></a>
    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="#Education">Education</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="#Project">Project</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="#Skills">Skills</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="#Experience">Experience</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="#GetInTouch">Get in touch</a>
        </li>
    </ul>

    </div>
    </nav>
  )
}
};

export default Navbar;
