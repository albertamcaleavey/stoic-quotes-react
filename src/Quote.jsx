import { useState, useEffect } from 'react';
import { getQuote } from './services/api-calls';


const Quote = (props) => {
  const [quotes, setQuotes] = useState({})

  useEffect(()=> {
    getQuote()
    .then((quoteData) => console.log(quoteData))
    // console.log('mounted!')
  }, [])

  return (  
    <>
      {/* <h3>{quotes.author}</h3>
      <h1>{quotes.quote}</h1> */}
    </>
  );
}
 
export default Quote;