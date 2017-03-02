const React = require('react');

var HeaderText = React.createClass({
  render(){
    return(
      <div>
        <h1><b>{this.props.headingText}</b></h1>
        <p><i>{this.props.headingDesc}</i></p>
      </div>
    );
  }
})

module.exports = HeaderText;
