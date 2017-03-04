const React = require('react'),
      AncSpan = require('./anchor.jsx');

var Controls= React.createClass({
  render(){
    return(
      <AncSpan clname={this.props.clname}  slide={this.props.slide} spancl={this.props.spancl}/>
    )
  }
});
module.exports = Controls;
