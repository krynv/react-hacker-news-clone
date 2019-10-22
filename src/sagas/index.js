import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_STORIES } from '../constants/actionTypes';
import { handleFetchStories } from './story';

function* watchAll() {
    yield all([
        takeEvery(FETCH_STORIES, handleFetchStories),
    ])
}

export default watchAll;