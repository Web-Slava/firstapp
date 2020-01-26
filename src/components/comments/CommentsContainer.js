import React from 'react';
import CommentComponent from './CommentComponent';

class CommentsContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpenComments: false
        };
        this.onButtonClickCom = this.onButtonClickCom.bind(this);
    }

    
    onButtonClickCom() {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        });
    }

    render() {
        const {comments} = this.props;
        return(
            <div className="card">
                <button className={`btn ${this.state.isOpenComments
                            ? 'btn-warning'
                            : 'btn-primary'
                        }`
                    }
                            onClick = {this.onButtonClickCom}
                >

                            {this.state.isOpenComments
                                ? 'Close comments'
                                : 'Open comments'
                            }
                    
                </button>
                
                {this.state.isOpenComments && (
                    <div>
                        {comments.map(comment => (
                            <CommentComponent commentAuthor = {comment.commentAuthor}
                                              commentText = {comment.commentText}
                                              likes = {comment.likes}
                    />
                ))}
                    </div>
                )}

                
                
            </div>
        );
    }
}

export default CommentsContainer;