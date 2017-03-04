const React= require('react');

var Img=React.createClass({
  render(){
    return(
      <div className={this.props.clsname} style={this.props.img}>

      </div>
    )
  }
});

module.exports = Img;
