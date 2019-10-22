import { doAddStories } from '../../actions/story';

describe('story action', () => {
    it('adds stories', () => {

        const stories = ['a', 'b'];

        const expectedAction = {
            type: 'ADD_STORIES',
            stories,
        };

        const action = doAddStories(stories);

        expect(action).toEqual(expectedAction);;
    });
});