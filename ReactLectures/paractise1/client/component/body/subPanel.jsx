const React = require('react'),
      Content = require('./contenthead1.jsx'),
      Desc = require('./Content1Desc.jsx'),
      AnchorBtn = require('./anchorbtn.jsx');
      // Button = require('./Button.jsx');


var SubPanel = React.createClass({
  render(){
    return(
      <div className= "col-md-4">
        <div className = "panel panel-default">
          <div className = "panel-heading">
              <Content contentName = {this.props.contentName} />
          </div>
          <div className = "panel-body">
              <Desc desc={this.props.desc} />
              <AnchorBtn clsname = {this.props.clsname} btnName={this.props.btnName}/>
              {/* <Button clsname = {this.props.clsname} btnName={this.props.btnName} /> */}
          </div>
        </div>
      </div>

    )
  }
})
module.exports= SubPanel;
