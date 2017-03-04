const React = require('react');

var ImagesPath= React.createClass({
  render(){
    return(
      <a href = "#" >
        <img className = {this.props.clname} src={this.props.path} alt=""/>
      </a>
    )
  }
})
module.exports = ImagesPath;
