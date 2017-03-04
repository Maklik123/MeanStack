const React = require('react'),
      Img= require('./imageDiv.jsx');

var ImgPath= React.createClass({
  render(){
    return(
      <Img clsname={this.props.clsname} path={this.props.path}/>
    )
  }
})
module.exports = ImgPath;
