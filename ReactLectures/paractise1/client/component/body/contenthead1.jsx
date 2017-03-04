const React= require('react');

var Content = React.createClass({
  render(){
    return(
      <h4>
        <i className='fa fa-fw fa-check'></i>
        {this.props.contentName}
      </h4>

    )
  }
})
module.exports=Content;
