const React = require('react'),
      Head = require('./head.jsx');

var Heading = React.createClass({
  render(){
    return(
      <div className = "carousel-caption">
        <Head head={this.props.head}/>
      </div>
    )
  }
})
module.exports = Heading;
