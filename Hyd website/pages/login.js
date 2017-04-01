import React from "react";
import Link from "next/link";
import Head from "../component/head";


export default class extends React.Component{
  render(){
    return(
      <div>
      <Head></Head>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
            <form role="form" method="post">
              <fieldset>
                <h2> Please Sign In</h2>
                <hr className="colorgraph"/>
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address"/>
                  </div>
                  <div className="form-group">
                    <input type='password' name="password" id="password" className="form-control input-lg" placeholder="Password"/>
                  </div>
                  <span className="button-checkbox">
                    <button type="button" className="btn" data-color="info">Remember me</button>
                    <input type="checkbox" name="remember_me" id="remember_me" className="hidden"/>
                    <a href="#" className="btn btn-link pull-right">Forgot Password?</a>
                  </span>
                  <hr className="colorgraph"/>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <button value="Login" className="btn btn-lg btn-success btn-block">Login</button>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <a href="/signup" className="btn btn-lg btn-primary btn-block">Sign Up</a>
                    </div>
                  </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
