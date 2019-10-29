import React from 'react';
import ReactDOMServer from 'react-dom/server';

import axios from 'axios';

import config from './config';

import App from './src/components/App';

const serverRender = () =>
    axios.get(`${config.serverUrl}/api/cars`)
        .then(resp => {
            return {
                initialMarkup: ReactDOMServer.renderToString(<App initialCars={resp.data.cars} />),
                initialData: resp.data
            };
        })
        .catch(console.error);

export default serverRender;