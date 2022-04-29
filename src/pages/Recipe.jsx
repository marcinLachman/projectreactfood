import React, { useContext, useEffect, useState } from 'react';
import { AppContext }  from '../AppContext';
import { useParams, useNavigate } from "react-router-dom";


import '../style/recipe.css';

const Recipe = () => {

  const { dataComments, dataRecipes } = useContext(AppContext);
  const { link } = useParams();
  const navigate = useNavigate();
  const [ inputName, setInputName ] = useState([]);
  const [ text, setText ] = useState('');

  // useEffect(() => {

  // }, []);

  const handleSubmit = ( event ) => {
    event.preventDefault();
    
    const lastId = dataComments.length;

    const objComments = {
      id: lastId + 1,
      link: link,
      name: inputName,
      text: text,
    };

    if ( inputName.length < 3 ) {
      console.log("Błąd")
    } else {
      dataComments.push(objComments);
      navigate({ pathname: `/Recipes/${link}`});
      setInputName('');
      setText('');
    }
  };

  const recipeFilter = dataRecipes.filter( filter => filter.link === link );

  const displayRecipe = recipeFilter.map( show => {
    return (
      <div key={show.id}>
        <img src={show.img} alt="img food" width="500" height="600" />
        <h1>{show.title}</h1>
        <p>{show.text}</p>
      </div>
    )
  });

  const comments = dataComments.filter( filter => filter.link === link );

  const displayCommnets = comments.map( display => {
    return (
      <div key={display.id} className='recipe-box-right-every'>
        <span><p>Imię: {display.name}</p></span>
        <p>{display.text}</p>
      </div>
    )
  });

  return (
    <div className='recipe'>
      <div className='container'>
        <div className='recipe-boxes'>
          <div className='recipe-box-left'>
            { displayRecipe }
          </div>

          <div className='recipe-box-right'>
            {displayCommnets}

            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Imię' value={inputName} onChange={ (event) => setInputName(event.target.value) } />
              <textarea placeholder='Wiadomość... ' rows="4" cols="100" value={text} onChange={ (event) => setText(event.target.value) } ></textarea>
              <button type="submit">Wyślij</button>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Recipe