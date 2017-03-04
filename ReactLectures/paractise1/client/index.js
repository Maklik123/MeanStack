const React = require('react'),
      ReactDom= require('react-dom'),
      HeaderPanel= require('./component/header/headerpanel.jsx'),
      BodyManager = require('./component/body/BodyManager.jsx');

ReactDom.render(<HeaderPanel />,document.getElementById('header'));
ReactDom.render(<BodyManager/>,document.getElementById('body'));
