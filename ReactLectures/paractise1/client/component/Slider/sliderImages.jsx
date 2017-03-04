const React = require('react'),
      Heading = require('./Heading.jsx'),
      ImgPath = require('./ImgPath.jsx');

var SliderImages = React.createClass({
  render(){
    return(
      <div className="carousel-inner">
        <div className="item active">
          <ImgPath clsname='fill' style = 'background-image:url(./src/img/1.jpg)'/>
          <Heading head='Caption1'/>
        </div>
        <div className="item">
          <ImgPath clsname='fill' style = 'background-image:url(./src/img/2.jpg)'/>
          <Heading head='Caption2'/>
        </div>
        <div className="item">
          <ImgPath clsname='fill' style = 'background-image:url(./src/img/3.jpg)'/>
          <Heading head='Caption3'/>
        </div>
      </div>
    )
  }
});
module.exports=SliderImages;
