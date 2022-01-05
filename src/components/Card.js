import React from 'react';

const Card = ({ title,  item1, item2, item3, background }) => {
    return (
        <div className=' card' style={{background : background}}>
        <h4>{ title }</h4>
        <ul>
        <li> <b>{item1}</b></li> 
        <li><b>{item2}</b></li>
        <li><b>{item3}</b></li>
        </ul>
              </div>
    );
};

export default Card;