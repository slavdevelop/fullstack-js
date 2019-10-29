import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    <App initialCars={window.initialData.cars} />,
    document.getElementById('root')
);