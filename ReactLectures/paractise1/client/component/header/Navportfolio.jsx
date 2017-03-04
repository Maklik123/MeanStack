const React= require('react'),
      Down2 = require('./DropDown2.jsx'),
      DropDownName = require('./PortFolioSubItems.jsx');


var PortFolio=React.createClass({
  render(){
    return(
      <li className="dropdown">
          <Down2 down='PortFolio'/>
          <ul className="dropdown-menu">
            <DropDownName />
          </ul>
      </li>
    )
  }
})
module.exports=PortFolio;
