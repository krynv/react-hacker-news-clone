import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const stories = [
    {
        title: 'We Are Number 1',
        url: 'http://google.com',
        author: 'Kim Jon-Un',
        num_comments: 0,
        points: 9001,
        objectID: 0,
    }, {
        title: 'flix.industries',
        url: 'http://flix.industries',
        author: 'VK',
        num_comments: 1,
        points: 69,
        objectID: 1,
    },
];

ReactDOM.render(<App stories={stories} onArchive={() => { }} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();