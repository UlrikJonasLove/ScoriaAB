import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.css';
import App from './App';
import ErrorBoundry from '../src/components/logic/errorBoundry';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<ErrorBoundry>
<App />
</ErrorBoundry>,
 document.getElementById('root'));

serviceWorker.unregister();
