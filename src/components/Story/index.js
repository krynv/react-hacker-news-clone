import React from 'react';
import './Story.css';

import { InlineButton } from '../Buttons';

class Story extends React.Component {
    render() {
        const {
            story,
            columns,
            onDismiss
        } = this.props;

        const {
            title,
            url,
            author,
            num_comments,
            points,
            objectID
        } = story;

        return (
            <div className="story">
                <span style={{ width: columns.title.width }}>
                    <a href={url}>{title}</a>
                </span>
                <span style={{ width: columns.author.width }}>
                    {author}
                </span>
                <span style={{ width: columns.comments.width }}>
                    {num_comments}
                </span>
                <span style={{ width: columns.points.width }}>
                    {points}
                </span>
                <span style={{ width: columns.dismiss.width }}>
                    <InlineButton onClick={() => onDismiss(objectID)}>
                        Dismiss
                    </InlineButton>
                </span>
            </div>
        );
    }
}

export default Story;