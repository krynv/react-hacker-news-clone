import { ADD_STORIES, FETCH_STORIES_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
    stories: [],
    error: null
};

const applyAddStories = (state, action) => ({
    stories: action.stories,
    error: null
});

const applyFetchStoriesError = (state, action) => ({
    stories: [],
    error: action.error
});

function storyReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case ADD_STORIES: {
            return applyAddStories(state, action);
        }
        case FETCH_STORIES_ERROR: {
            return applyFetchStoriesError(state, action);
        }

        default:
            return state;
    }
}

export default storyReducer;