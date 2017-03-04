const React = require('react'),
      ImagesPath = require('./imagespath.jsx');

var LastImg = React.createClass({
  render(){
    return(
      // <div className ="col-md-6">
        <ImagesPath clname={this.props.clname} path={this.props.path} />
      // </div>
    )
  }
})

module.exports=LastImg;
