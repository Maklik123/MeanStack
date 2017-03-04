const React = require('react');

var Listitems = React.createClass({
  render(){
    return(
      <li>{this.props.listdesc}</li>
    )
  }
})
module.exports = Listitems;
