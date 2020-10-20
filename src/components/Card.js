import React from 'react';

import './Card.css';

const Card = ( {id,name, email, imgUrl }) => {
    
    return (
        
        <div id={id} className="card" style={{width: '15rem'}}>
            <img src={`https://robohash.org/${id}?size=200x200`} className="card-img-top" alt="">
            </img>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{email}</p>
            </div>
        </div>

    );
}

export default Card;