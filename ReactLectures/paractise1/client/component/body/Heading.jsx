const React = require('react');


var Heading = React.createClass({
  render(){
    return(
      <h1 className='page-header'>
        {this.props.heading}
      </h1>
    )
  }
});
module.exports=Heading;
