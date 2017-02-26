const React= require('react');
const HeaderName = require('./headername.jsx'),
      Style= require('./src/style');

var heading = React.createClass({
  render(){
    return(
      <div style= {Style} className='col-md-12 col-md-offset-5'>
        <HeaderName name = 'Lorem Ipsum'/>
      </div>
    )
  }
});
module.exports = heading;
