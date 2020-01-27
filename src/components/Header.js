import React from 'react';
import avatar from '../assets/img/cat.jpg';

function Header(props) {
    //console.log(props.author);
    return (
        <header className="card-header centered">
            <div className="header-name">{props.author}</div>
            <div>
                <img src={avatar} 
                    alt="avatar"
                    className="avatar"
                />
            </div>
            
        </header>
    );
}

export default Header;