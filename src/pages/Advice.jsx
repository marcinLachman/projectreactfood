import React, { useContext } from 'react';
import { AppContext }  from '../AppContext';

import '../style/advice.css';

const Advice = () => {

  const { data, dataAdvices } = useContext(AppContext);

  const dataAdviceView = dataAdvices.map( dataAdvice => {
    return(
      <div key={dataAdvice.id} className='advice-box'>
        <h1>{dataAdvice.number}</h1>
        <p>{dataAdvice.text}</p>
      </div>
    )
  });

  return ( 
    <div className='advice'>
      <div className='container'>
        <div className='advice-box-text'><h1>{data.textAdvice}</h1></div>
        <div className='advice-boxes'>
          {dataAdviceView}
        </div>
      </div>
    </div>
   );
}
 
export default Advice