const React = require('react'),
      NavItem = require('./NavItem.jsx');

var OtherSubItem= React.createClass({
  render(){
    return(
        <li>
          <NavItem anchor='Full Width Page'/>
          <NavItem anchor='Slidebar Page'/>
          <NavItem anchor='FAQ'/>
          <NavItem anchor='404'/>
          <NavItem anchor='Pricing Table'/>
        </li>
    )
  }
});
module.exports=OtherSubItem;
