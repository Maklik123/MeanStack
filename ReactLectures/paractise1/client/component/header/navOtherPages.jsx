const React= require('react'),
      Down2 = require('./DropDown2.jsx'),
      OtherSubItem = require('./OtherPagesSubItem.jsx');


var OtherPages=React.createClass({
  render(){
    return(
      <li className="dropdown">
          <Down2 down='OtherPages'/>
          <ul className="dropdown-menu">
            <OtherSubItem />
          </ul>
      </li>
    )
  }
})
module.exports=OtherPages;
