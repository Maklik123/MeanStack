const React  =require('react'),
      NavItem = require('./NavItem.jsx');

var BlogItem = React.createClass({
  render(){
    return(
      <li>
        <NavItem anchor='BlogItemA'/>
      </li>

    )
  }
});
module.exports=BlogItem;
