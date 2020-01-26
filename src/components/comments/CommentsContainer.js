import React from 'react';
import CommentComponent from './CommentComponent';

class CommentsContainer extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        const {comments} = this.props;
        return(
            <div className="card">
                {comments.map(comment => (
                    <CommentComponent author = {comment.author}
                                      commentText = {comment.commentText}
                                      likes = {comment.likes}
                    />
                ))}
            </div>
        );
    }
}

export default CommentsContainer;