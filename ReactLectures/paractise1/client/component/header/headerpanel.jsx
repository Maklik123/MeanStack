const React= require('react'),
      WebLogo= require('./weblogo.jsx'),
      NavItem = require('./NavItem.jsx'),
      PortFolio = require('./Navportfolio.jsx'),
      Blog = require('./NavBlog.jsx'),
      OtherPages = require('./navOtherPages.jsx');

var HeaderPanel=React.createClass({
  render(){
    return(
      <div className='navbar navbar-inverse navbar-fixed-top' role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only"></span>
                <span className="sr-only"></span>
                <span className="sr-only"></span>
                <span className="sr-only"></span>
            </button>
            <WebLogo />
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <NavItem anchor='About'/>
              <NavItem anchor='Services'/>
              <NavItem anchor='Contact' />
              <PortFolio />
              <Blog />
              <OtherPages />
            </ul>
          </div>
        </div>
      </div>
    )
  }
});
module.exports=HeaderPanel;
