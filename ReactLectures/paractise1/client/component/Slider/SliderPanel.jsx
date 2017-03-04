const React = require('react'),
      SliderImages = require('./sliderimages.jsx'),
      Controls = require('./SliderControler.jsx');


var SliderPanel = React.createClass({
  render(){
    return(
      <div className = "carousel slide">
        <ol className="carousel-indicators">
          <li data-target ="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target ="#myCarousel" data-slide-to="1"></li>
          <li data-target ="#myCarousel" data-slide-to="2"></li>
        </ol>
        <SliderImages />
        <Controls clname='left carousel-control' slide = 'prev' spancl='icon-prev'/>
        <Controls clname='right carousel-control' slide = 'next' spancl='icon-next'/>
      </div>
    )
  }
})
module.exports = SliderPanel;
