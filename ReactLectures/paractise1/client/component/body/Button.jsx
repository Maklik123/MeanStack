const React = require('react'),
      AnchorBtn = require('./anchorbtn.jsx');


var Button = React.createClass({
  render(){
    return(
      <AnchorBtn clsname={this.props.clsname} btnName={this.props.btnName}/>
    )
  }
});
module.exports = Button;
