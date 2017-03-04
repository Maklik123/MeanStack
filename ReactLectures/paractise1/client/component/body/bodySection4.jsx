const React = require('react'),
      ParaDesc = require('./paraDesc.jsx'),
      Button = require('./Button.jsx');

var Section4 = React.createClass({
  render(){
    render(
      <div className='row'>
        <div className='col-md-8'>
          <ParaDesc desc='Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Molestias, expedita,
              saepe, vero rerum deleniti beatae veniam harum neque
               nemo praesentium cum alias asperiores commodi.'/>
        </div>
        <div className='col-md-4'>
          <Button clsname='btn btn-lg btn-default btn-block' btnName='Call to Action'/>
        </div>
      </div>
    )
  }
});
module.exports = Section4;
