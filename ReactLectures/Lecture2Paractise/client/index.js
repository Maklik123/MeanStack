const React = require('react'),
      ReactDOM = require('react-dom'),
      HeaderManager = require('./component/HeaderManager.jsx'),
      MainBody = require('./component/mainbodyManager.jsx');

ReactDOM.render(<HeaderManager />,document.getElementById('header'));
ReactDOM.render(<MainBody />,document.getElementById('body'));
