const React = require('react'),
      Desc = require('./Content1Desc.jsx');


var ParaDesc = React.createClass({
  render(){
    return(
      <Desc desc={this.props.desc} />
    )
  }
})
module.exports = ParaDesc;
