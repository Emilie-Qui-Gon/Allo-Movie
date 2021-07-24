
import React from 'react';
import { render } from 'react-dom';


import App from '../src/components/App/app';


const rootReactElement = <App />;

const target = document.getElementById('root');

render(rootReactElement, target);
