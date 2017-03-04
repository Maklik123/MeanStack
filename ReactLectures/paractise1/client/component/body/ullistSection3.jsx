const React = require('react'),
      ListDesc = require('./ListDesc.jsx');

var ULlist = React.createClass({
  render(){
    return(
      <ul>
        <ListDesc listdesc='Bootstrap v3.3.7' />
        <ListDesc listdesc='jQuery v1.11.1' />
        <ListDesc listdesc='Font Awesome v4.2.0' />
        <ListDesc listdesc='Working PHP contact form with validation' />
        <ListDesc listdesc='Unstyled page elements for easy customization' />
        <ListDesc listdesc='17 HTML pages'/>
      </ul>
    )
  }
});
module.exports= ULlist;
