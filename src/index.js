import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HelloComp from './HelloComponent';
import StateUsage from './StateUsage';
import PropsUsageComp from './PropsUsage';
import Parent from './parentComp';
import LcmComp from './LCM';
import RouterLink from './Router';
// let name="test"
// let sample=<React.Fragment><h1>
//   started react {}</h1><h2>name</h2></React.Fragment>


ReactDOM.render(
    // <App/>,
    //<HelloComp/>,
    //<StateUsage/>,
    //<PropsUsageComp name="Jane" greeting="Morning"/>,
    //<Parent/>,
    <RouterLink/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
