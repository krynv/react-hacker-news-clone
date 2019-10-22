import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';

const HACKER_NEWS_API_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = query => fetch(`${HACKER_NEWS_API_URL}${query}`).then(response =>
    response.json()
);

// generator function
function* handleFetchStories(action) {
    const { query } = action;
    const result = yield call(fetchStories, query);

    // used to pause and resume a generator function
    yield put(doAddStories(result.hits)); // put() dispatches the next action
}

export { handleFetchStories };