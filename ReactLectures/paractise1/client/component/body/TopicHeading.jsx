const React= require('react'),
      Heading= require('./Heading.jsx');


var TopicHead= React.createClass({
  render(){
    return(
      <div className='col-lg-12'>
          <Heading heading= {this.props.heading} />
      </div>

    )
  }
})

module.exports=TopicHead;
