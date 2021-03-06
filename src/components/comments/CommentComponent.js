import React from 'react';

class CommentComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {commentAuthor, commentText, likes} = this.props;
        return (
            <div className="comments_item">
                <p><span className="style_bold">Author:</span> {commentAuthor}</p>
                <p className="comment_text">{commentText}</p>
                <p className="likes"><span className="style_bold">Likes:</span> {likes}</p>
            </div>
        );
    }
}




        

        
    

export default CommentComponent;