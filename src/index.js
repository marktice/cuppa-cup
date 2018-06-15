import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import CupForm from './components/CupForm';

ReactDOM.render(<CupForm/>, document.querySelector('#formy-the-form'));
ReactDOM.render(<App/>, document.querySelector('#root'));
