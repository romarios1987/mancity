import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/app.css';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./Routes";

import './firebase';


const App = () =>(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));
