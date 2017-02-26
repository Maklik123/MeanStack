const React = require('react'),
      Style= require('./src/style');

var headername = React.createClass({
  render(){
    return(<p style = {Style}>{this.props.name}</p>);
  }
})
module.exports = headername;
