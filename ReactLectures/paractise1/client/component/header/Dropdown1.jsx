const React = require('react');

var Down1=React.createClass({
  render(){
    return(
      <a href="#" className="dropdown-toogle" data-toggle="dropdown">{this.props.down}<b className='caret'></b></a>

    )
  }
})
module.exports=Down1;
