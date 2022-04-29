import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext }  from '../AppContext';

import Logo from '../images/icon/icon-logo.svg';

import '../style/Navigation.css'

const Navigation = () => {

  const { dataMenu } = useContext(AppContext);

  return ( 
    <div className='navigation'>
      <div className='container'>

        <div className='nav-left-side'>
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
          <Link to="/"><p>Nazwa</p></Link>
        </div>

        <div className='nav-right-side'>
          <Link to="/">{dataMenu[0]}</Link>
          <Link to="/Recipes">{dataMenu[1]}</Link>
          <Link to="/Advice">{dataMenu[2]}</Link>
          <Link to="/Contact">{dataMenu[3]}</Link>
        </div>
        
      </div>
    </div>
   );
}
 
export default Navigation;