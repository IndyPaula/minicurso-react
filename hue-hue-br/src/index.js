import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import data from './data'

ReactDOM.render(<App posts={data} />, document.getElementById('root'));
registerServiceWorker();
