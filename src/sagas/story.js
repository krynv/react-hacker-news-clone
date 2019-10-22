import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchStoriesError } from '../actions/story';
import { fetchStories } from '../api/story';

// generator function
function* handleFetchStories(action) {
    const { query } = action;

    try {
        const result = yield call(fetchStories, query);
        // used to pause and resume a generator function
        yield put(doAddStories(result.hits)); // put() dispatches the next action
    } catch (err) {
        yield put(doFetchStoriesError)
    }
}

export { handleFetchStories };