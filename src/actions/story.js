import {
    ADD_STORIES, // adds them to the store
    FETCH_STORIES, // fetches them from the API
} from '../constants/actionTypes';

const doAddStories = stories => ({
    type: ADD_STORIES,
    stories,
});

const doFetchStories = query => ({
    type: FETCH_STORIES,
    query,
});

export { doAddStories, doFetchStories };