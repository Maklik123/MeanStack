const React = require('react');


var AnchorBtn = React.createClass({
  render(){
    return(
      <a href = "#" className ={this.props.clsname}>
            {this.props.btnName}
      </a>
    )
  }
})
module.exports= AnchorBtn;
