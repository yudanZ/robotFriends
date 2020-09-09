import React from 'react';
import './Card.css';

const Card = ( {id,name, email, imgUrl }) => {
    
    return (
        
        <div id={id} className="card " style={{width: '15rem'}}>
            <img src={'https://robohash.org/' + id} className="card-img-top" alt="">
            </img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
            </div>
        </div>

    );
}

export default Card;