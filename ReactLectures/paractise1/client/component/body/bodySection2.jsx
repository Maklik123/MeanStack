const React = require('react'),
      TopicHead = require('./TopicHeading.jsx'),
      ImgCol =  require('./imagesColumn.jsx');

var Section2 = React.createClass({
  render(){
    return(
      <div className= "row">
        <TopicHead  heading = 'Portfolio Heading'/>
        <ImgCol clname = 'img-responsive img-portfolio img-hover' path = './src/img/1.jpg'/>
        <ImgCol clname = 'img-responsive img-portfolio img-hover' path = './src/img/2.jpg'/>
        <ImgCol clname = 'img-responsive img-portfolio img-hover' path = './src/img/3.jpg'/>
        <ImgCol clname = 'img-responsive img-portfolio img-hover' path = './src/img/4.jpg'/>
        <ImgCol clname = 'img-responsive img-portfolio img-hover' path = './src/img/5.jpg'/>
        <ImgCol clname = 'img-responsive img-portfolio img-hover' path = './src/img/6.jpg'/>
      </div>
    )
  }
})
module.exports= Section2;
