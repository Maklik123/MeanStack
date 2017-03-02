const React= require('react');


var BodyText= React.createClass({
  render(){
    return(
      <div className='col-md-4'>
        <h1>
          {this.props.bodyText}
        </h1>
        <p>
          {this.props.bodyDesc}
        </p>
      </div>
    )
  }
})

module.exports = BodyText;
