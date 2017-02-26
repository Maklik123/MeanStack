const React= require('react'),
      Column1 = require('./column1.jsx'),
      Column2 = require('./column2.jsx'),
      Heading = require('./heading.jsx');

var body= React.createClass({
  render(){
    return(
      <div>
        <Heading />
        <div>
          <Column1 />
        </div>
        <div>
          <Column2 />
        </div>
      </div>
    )
  }
});
module.exports= body;
