const React =require('react'),
      TopicHead = require('./TopicHeading.jsx'),
      Button = require('./Button.jsx'),
      SubPanel = require('./SubPanel.jsx');



var Section1=React.createClass({
  render(){
    return(
      <div className = 'row'>
        <TopicHead  heading = 'Welcome to Modern Business'/>
        <SubPanel contentName='Bootstrap v3.3.7'
          desc= 'Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Itaque, optio corporis quae nulla aspernatur
          in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet
          incidunt dicta nostrum quod?'
          clsname='btn btn-default'
               btnName='LearnMore' />
          <SubPanel contentName=' Free &amp; Open Source'
            desc= 'Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Itaque, optio corporis quae nulla aspernatur
            in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet
            incidunt dicta nostrum quod?'
            clsname='btn btn-default'
            btnName='LearnMore' />
            <SubPanel contentName=' Easy to Use'
              desc= 'Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Itaque, optio corporis quae nulla aspernatur
              in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet
              incidunt dicta nostrum quod?'
              clsname='btn btn-default'
              btnName='LearnMore' />
      </div>
    )
  }
});

module.exports=Section1;
