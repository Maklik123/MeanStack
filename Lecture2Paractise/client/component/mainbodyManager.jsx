const React= require('react'),
      BodyPanel = require('./mainbodypanel.jsx'),
      RightManager = require('./bodyrightManager.jsx');

var MainBody= React.createClass({
  render(){
    return(
      <div>
        <div className='col-md-9'>
          <BodyPanel  />
          <BodyPanel  />
        </div>
        <div>
          <RightManager />
        </div>


      </div>
    );
  }
});
module.exports = MainBody;
