const React= require('react'),
      Down1 = require('./Dropdown1.jsx');


var Down2= React.createClass({
  render(){
    return(
       <Down1 down={this.props.down} />
    )
  }
});
module.exports=Down2;
