const React = require('react');


var RightText = React.createClass({
  render(){
    return(
      <div style={this.props.background-color}>
        <p>
          {this.props.rightText}
        </p>
        <h2>
          {this.props.rightHeading}
        </h2>
      </div>
    )
  }
})
module.exports=RightText;
