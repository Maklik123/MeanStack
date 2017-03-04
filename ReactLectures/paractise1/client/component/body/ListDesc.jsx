const React = require('react'),
      Listitems = require('./ListItem.jsx');


var ListDesc=React.createClass({
  render(){
    return(
      <Listitems  listdesc = {this.props.Listdesc} />
    )
  }
})

module.exports= ListDesc;
