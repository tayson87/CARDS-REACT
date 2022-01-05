import React from 'react';


const Card1 = ({quote, author, background, changeQuotes }) => {
    return (
        <div className=' Card1' >
        <h4 >{ quote }</h4>
                <ul>
        <li className='author' style={{color:background}}> <b>{author}</b></li> 
                     </ul>
             <button className='cambio' onClick={changeQuotes} style={{color:background}}><i className="fas fa-random"></i></button>
              </div>
    );
};

export default Card1;