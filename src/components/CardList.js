import React from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ({ robots }) => {
    return (
        <div className="robotsContainer" >
            {
                robots.map( (el, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                            imgUrl={robots[i].imgUrl}
                        />
                    );
                    
                })   
            }   
        </div>
    );
    
}

export default CardList;