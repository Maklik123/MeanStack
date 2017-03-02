const React = require('react'),
      HeaderPanel = require('./HeaderPanel.jsx');

var HeaderManager = React.createClass({
  render(){
    return(
      <div className='row'>
        <HeaderPanel Style={this.props.blue} headingText='20' headingDesc='New followers added this month' />
        <HeaderPanel headingText='$ 1250' headingDesc='Average Monthly Income' />
        <HeaderPanel headingText='$ 13865' headingDesc='Yearly Income Goal' />
        <HeaderPanel headingText='18' headingDesc='Paris' />
      </div>
    )
  }
})

module.exports = HeaderManager;
