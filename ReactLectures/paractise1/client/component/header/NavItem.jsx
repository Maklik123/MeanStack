const React=require('react'),
      AnchorData=require('./anchordata.jsx');


var NavItem=React.createClass({
  render(){
    return(
        <AnchorData anchor={this.props.anchor}/>
    )
  }
})

module.exports=NavItem;
