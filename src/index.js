import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icon.min.css';

const loadingMarkup = (
  <div className="py-4 text-center">
    <h1>Loading...</h1>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
