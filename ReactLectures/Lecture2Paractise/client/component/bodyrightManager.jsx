const React= require('react'),
      Style= require('./src/style'),
      RightPanel = require('./bodyrightPanel.jsx');


var RightManager = React.createClass({
  render(){
    return(
      <div style= {Style.bodyHeader,Style.background1}>
        <RightPanel style='blue' rightText = 'New Visitor' rightHeading='1.5k' />
        <RightPanel rightText = 'New Visitor' rightHeading='1.5k' />
        <RightPanel rightText = 'New Visitor' rightHeading='1.5k' />
        <RightPanel rightText = 'New Visitor' rightHeading='1.5k' />
      </div>



    );
  }
});

module.exports=RightManager;
