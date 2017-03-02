const React= require('react'),
      Heading2 = require('./column2heading.jsx'),
      Paragraph2= require('./column2paragraph.jsx');


var column2 = React.createClass({
  render(){
    return(
      <div className='col-md-6'>
        <Heading2 />
        <Paragraph2 />
      </div>
    )
  }
})
module.exports= column2;
