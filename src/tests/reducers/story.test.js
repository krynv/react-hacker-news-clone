import deepFreeze from 'deep-freeze';

import storyReducer from '../../reducers/Story';

describe('story reducer', () => {
    it('adds stories to the story state', () => {
        const stories = ['a', 'b', 'c'];

        const action = {
            type: 'ADD_STORIES',
            stories,
        };

        const previousState = { stories: [], error: null };
        const expectedNewState = { stories, error: null };

        deepFreeze(previousState); // we need to freeze the previous state otherwiser we cannot test it
        const newState = storyReducer(previousState, action);

        expect(newState).toEqual(expectedNewState);;
    });
});