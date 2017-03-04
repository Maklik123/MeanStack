const React  = require('react'),
      ImagesPath = require('./imagespath.jsx');

var ImgCol= React.createClass({
  render(){
    return(
      <div className= "col-md-4 col-sm-6">
         <ImagesPath clsname = {this.props.clname} path= {this.props.path} />
      </div>
    )
  }
})
module.exports=ImgCol;
