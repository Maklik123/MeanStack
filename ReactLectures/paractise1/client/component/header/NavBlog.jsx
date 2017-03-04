const React= require('react'),
      Down2 = require('./DropDown2.jsx'),
      BlogItem = require('./BlogsubItems.jsx');


var Blog=React.createClass({
  render(){
    return(
      <li className="dropdown">
          <Down2 down='Blog'/>
          <ul className="dropdown-menu">
            <BlogItem />
          </ul>
      </li>
    )
  }
})
module.exports=Blog;
