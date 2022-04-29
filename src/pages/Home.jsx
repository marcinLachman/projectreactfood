import React, { useContext } from 'react';
import { AppContext }  from '../AppContext';

import '../style/home.css';

const Home = () => {

  const { data } = useContext(AppContext);

  return ( 
    <div className='landing'>
      <div className='container'>
        <div className='landing-box'>

          <div className='landing-left-side'>
            <h1>{data.textHome}</h1>
            <p>{data.textLorem}</p>
            <div className='landing-left-side-button'>
              <button>Więcej</button>
            </div>
          </div>

          <div className='landing-right-side'>
            <div className='landing-right-side-box-img'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Home;