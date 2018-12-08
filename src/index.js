import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';

ReactDOM.render(
    <Provider RootStore={ new RootStore() }>
        <App />
    </Provider>, 
    document.getElementById('root')
);