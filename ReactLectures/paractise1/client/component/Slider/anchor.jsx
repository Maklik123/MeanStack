const React = require('react');

var AncSpan = React.createClass({
  render(){
    return(
      <a className = {this.props.clname} href="#myCarousel" data-slide={this.props.slide}>
          <span className = {this.props.spancl} ></span>
      </a>
    )
  }
})

module.exports=AncSpan;
