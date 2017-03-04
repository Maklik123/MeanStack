const React = require('react');

var Desc = React.createClass({
  render(){
    return(
      <p>
        {this.props.desc}
      </p>
    )
  }
})
module.exports= Desc;
