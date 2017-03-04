const React = require('react'),
      Section1 = require('./bodySection1.jsx'),
      Section2 = require('./bodySection2.jsx'),
      Section3 = require('./bodySection3.jsx'),
      // Section4 = require('./bodySection4.jsx'),
      SliderPanel = require('../Slider/SliderPanel.jsx');



var BodyManager = React.createClass({
  render(){
    return(
      <div>
        <SliderPanel />
        <div className = "container">
          <Section1 />
          <Section2 />
          <Section3 />
          <hr />
          {/* <Section4 /> */}
        </div>
      </div>

    )
  }
});
module.exports= BodyManager;
