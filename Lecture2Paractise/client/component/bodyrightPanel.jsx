const React= require('react'),
      Style=require('./src/style'),
      RightText= require('./bodyrightText.jsx');


var RightPanel=React.createClass({
  render(){
    return(
      <div className='col-md-3'>
        <div className='panel panel-default'>
          <div className='panel-body' >
            <RightText rightText={this.props.rightText} rightHeading={this.props.rightHeading} />
          </div>
          <div className='panel-footer' >
          </div>
        </div>
      </div>
    )
  }
})
module.exports= RightPanel;
