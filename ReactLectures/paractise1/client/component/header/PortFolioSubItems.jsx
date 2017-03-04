const React = require('react'),
      NavItem = require('./NavItem.jsx');

var DropDownName= React.createClass({
  render(){
    return(
        <li>
          <NavItem anchor='PortfolioA'/>
        </li>
    )
  }
});
module.exports=DropDownName;
