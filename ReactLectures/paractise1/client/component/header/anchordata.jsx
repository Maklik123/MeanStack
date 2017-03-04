const React=require('react');

var AnchorData = React.createClass({
  render(){
    return(
      <li>
        <a href='#'>
          {this.props.anchor}
        </a>
      </li>
    )
  }
})
module.exports=AnchorData;
