import React, { useContext } from 'react';
import { AppContext }  from '../AppContext';
import { Link } from 'react-router-dom';

import '../style/recipes.css';

const Recipes = () => {

  const { data, dataRecipes } = useContext(AppContext);

  const dataRecipesView = dataRecipes.map( dataRecipe => {
    return(
      <div key={dataRecipe.id} className='recipes-box'>
          <img src={dataRecipe.img} alt="img food" width="500" height="600" />
          <h1>{dataRecipe.title}</h1>
          <p>{dataRecipe.text} <Link to={`/Recipes/${dataRecipe.link}`}>( ... )</Link></p>
      </div>
    )
  });

  return ( 
    <div className='recipes'>
      <div className='container'>
        <div className='recipes-box-text'><h1>{data.textRecipes}</h1></div>
        <div className='recipes-boxes'>
          {dataRecipesView}
        </div>
      </div>
    </div>
   );
}
 
export default Recipes;