import React from "react";
import Jquery from "jquery";
import Link from 'next/link'



export default()=>(
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/index">Info</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            {/* <li><a href="/about"> About</a></li> */}
            <li><a href="/contact"> Contact</a></li>
            <li><a href="/services"> Services</a></li>
            {/* <div>Click <Link href={ pathname: 'about', query: { name: 'Zeit' }}<a>here</a></Link>/div> */}
          

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu1 <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="/submenu1"> SubMenu1</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href='/signup'><span className="glyphicon gyphicon-user"></span> Signup</a></li>
            {/* <li className="dropdown">
              <a href='#' className="dropdown-toggle" data-target="dropdown">Signup<b className='caret'></b></a>
              <ul className="dropdown-menu">
                <li><a href='/signupuserr'><span className="glyphicon gyphicon-user"></span> SignUp As a User</a></li>
                <li><a href='signupclient'><span className="glyphicon gyphicon-user"></span> SignUp As a Client</a></li>
              </ul>
            </li> */}
            <li><a href='/login'><span className="glyphicon gyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </div>




    {/* <div className="container-fluid">
      <a className="navbar-brand" href="#">Umair Malik</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href='/contact'>Contact</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href='#'><span className="glyphicon gyphicon-user"></span> SignUp</a></li>
      c
    </ul> */}
    </nav>

)
