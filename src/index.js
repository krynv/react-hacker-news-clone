import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { ARCHIVE_STORY } from './constants/actionTypes';
import { getReadableStories } from './selectors/story';

import './index.css';

function render() {
    ReactDOM.render(
        <App stories={getReadableStories(store.getState())} onArchive={(id) => {
            store.dispatch(
                { type: ARCHIVE_STORY, id })
        }} />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();