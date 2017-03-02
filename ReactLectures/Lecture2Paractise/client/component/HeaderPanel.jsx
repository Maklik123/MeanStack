const React = require('react'),
      HeadingText = require('./HeaderText.jsx');

var HeadingPanel = React.createClass({
  render(){
    return(
      <div style ={this.props.background}className='col-md-3'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <HeadingText headingText={this.props.headingText} headingDesc={this.props.headingDesc}  />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HeadingPanel;
