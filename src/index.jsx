import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import { Provider } from 'react-redux'

import App from './components/app'


const screen = blessed.screen({
    autoPadding: true,
    debug: true,
    smartCSR: true,
    title: 'nba'
});

screen.key(['escape', 'q', 'C-c'], () => {
    return process.exit(0);
});

render(
    <App />,
    screen
);