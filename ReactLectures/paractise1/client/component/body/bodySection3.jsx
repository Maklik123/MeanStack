const React = require('react'),
      // ListDesc = require('./ListDesc.jsx'),
      TopicHead = require('./TopicHeading.jsx'),
      ParaDesc = require('./paraDesc.jsx'),
      ULlist = require('./ullistSection3.jsx'),
      LastImg = require('./lastImgPath.jsx');


var Section3 = React.createClass({
  render(){
    return(
      <div className="row">
        <TopicHead  heading = 'Modern Business Features'/>
        <div className="col-md-6">
            <ParaDesc desc='The Modern Business template by Start Bootstrap includes:'/>
              {/* <ul>
                <ListDesc Listdesc='Bootstrap v3.3.7'/>
                <ListDesc Listdesc='jQuery v1.11.1'/>
                <ListDesc Listdesc='Font Awesome v4.2.0'/>
                <ListDesc Listdesc='Working PHP contact form with validation'/>
                <ListDesc Listdesc='Unstyled page elements for easy customization'/>
                <ListDesc Listdesc='17 HTML pages'/>
              </ul> */}
              <ULlist />
              <ParaDesc desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Corporis, omnis doloremque non cum id reprehenderit,
                 quisquam totam aspernatur tempora minima unde aliquid
                  ea culpa sunt. Reiciendis quia dolorum ducimus unde.'/>
            </div>
              <div className='col-md-6'>
                <LastImg clname='img-responsive' path='./src/img/1'/>
              </div>
        </div>
    )
  }
});
module.exports= Section3;
