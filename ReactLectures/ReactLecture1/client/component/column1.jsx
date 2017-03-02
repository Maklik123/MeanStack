const React= require('react'),
      Heading1 = require('./column1heading.jsx'),
      Style = require('./src/style'),
      Paragraph1= require('./column1paragraph.jsx');


var column1 = React.createClass({
  render(){
    return(
      <div className='col-md-6' style={Style}>
        <Heading1 />
        <Paragraph1 />
      </div>
    )
  }
});
module.exports= column1;
