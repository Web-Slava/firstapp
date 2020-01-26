import React from 'react';

function NewComponent(props){
    const {title, description} = props;
    const onButtonClick = event => {
        console.log(event);
    }
    return (
        <div className="card new_card">
            <div className="new_header centered m-bottom">
                <p className="component-title">{title}</p>
                <button className="btn btn-danger"
                        onClick={onButtonClick}
                >
                    Close
                </button>
            </div>
            <div>{description}</div>
        </div>
    );
}

export default NewComponent;