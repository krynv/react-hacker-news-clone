import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { ARCHIVE_STORY } from './constants/actionTypes';

import './index.css';

ReactDOM.render(
    <App stories={store.getState().storyState} onArchive={(id) => {
        store.dispatch(
            { type: ARCHIVE_STORY, id })
    }} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();