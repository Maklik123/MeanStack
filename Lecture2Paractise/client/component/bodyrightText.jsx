const React = require('react');


var RightText = React.createClass({
  render(){
    return(
      <div>
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
