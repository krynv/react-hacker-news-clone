import { ARCHIVE_STORY } from '../constants/actionTypes';

const doArchiveStory = id => ({
    type: ARCHIVE_STORY,
    id, // to identify which post needs to be archived
});

export { doArchiveStory };