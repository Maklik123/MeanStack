const React = require('react'),
      BodyText = require('./mainbodyText.jsx'),
      // TextColumn = require('./bodyTextColumn.jsx'),
      //  RightPanel=require('./bodyrightPanel.jsx'),
      Style = require('./src/style');

var BodyPanel = React.createClass({
  render(){
    return(
      <div className='container'>
        <div className='col-md-9'>
          <div className='panel panel-default'>
            <div style={Style.bodyPanel} className='panel-body'>
              <div style={Style.background2}>

              </div>
            </div>
            <div style={Style.background1,Style.bodyHeader} className='panel-footer'>
              <div className='row'>
                <div className='container'>
                  <div className='col-md-5 col-md-offset-1'>
                    <BodyText bodyText='15080' bodyDesc='shotViews'/>
                    <BodyText bodyText='12000' bodyDesc='Likes'/>
                    <BodyText bodyText='50000' bodyDesc='Comments'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='col-md-3'>
            <RightPanel rightText = 'New Visitor' rightHeading='1.5k' />
        </div> */}
      </div>

    )
  }
})
module.exports = BodyPanel;
