const INITIAL_STATE = [
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

function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default: return state;
    }
}

export default storyReducer;