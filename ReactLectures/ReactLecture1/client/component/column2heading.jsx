const React = require('react'),
      Style = require('./src/style');

var heading2 = React.createClass({
  render(){
    return(
      <div>
        <h2 style= {Style}>
          Why do we use it?
        </h2>
      </div>
    )
  }
});
module.exports = heading2;
