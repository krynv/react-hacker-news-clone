import {
    ADD_STORIES, // adds them to the store
    FETCH_STORIES, // fetches them from the API
    FETCH_STORIES_ERROR, // handles errors
} from '../constants/actionTypes';

const doAddStories = stories => ({
    type: ADD_STORIES,
    stories,
});

const doFetchStories = query => ({
    type: FETCH_STORIES,
    query,
});

const doFetchStoriesError = error => ({
    type: FETCH_STORIES_ERROR,
    error,
});

export { doAddStories, doFetchStories, doFetchStoriesError };