import './App.css';
import { useState } from 'react';
import Quotes from './Quotes.json'
import Card1 from './components/Card1';

import React from 'react';

function App () {

  const color = [ "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871" ]

const [ quote , setQuote ] =  useState (Quotes[getNumber(Quotes.length) ] );

 const handleQuotes = () => {

  const index = getNumber(Quotes.length);
  setQuote(Quotes[index]);  
 setbackground(color[getNumber(color.length)])
 }

 


    const [background, setbackground] = useState(color[getNumber(color.length)]);

    

    return (
        <div className='app' style={{background}}>
              <Card1
             quote= {quote.quote}
            author={quote.author}
             changeQuotes ={handleQuotes}
             background= {background}  
             /> 
            
        </div>

    );
};

const getNumber = max  =>  Math.floor(Math.random() * max  );

export default App;
