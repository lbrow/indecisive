import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';


import './css/index.css';


import Header from "./components/Header";
import Container from "./components/Container";


const App = () => (
 <Router>
      <div className="wrapper">
      <Header />
      <Container />
    
    </div>
 </Router>
);
render(<App />, document.getElementById('root'));

serviceWorker.unregister();
