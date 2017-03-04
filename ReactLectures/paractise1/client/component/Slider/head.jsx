const React = require('react');

var Head= React.createClass({
  render(){
    return(
      <h2>
        {this.props.head}
      </h2>
    )
  }
})
module.exports = Head;
