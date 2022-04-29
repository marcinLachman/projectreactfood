import React, { useContext, useState } from 'react';
import { AppContext }  from '../AppContext';

import iconLocation from '../images/icon/icon-location.svg';
import iconMail from '../images/icon/icon-mail.svg';

import '../style/contact.css';

const Contact = () => {

  const { contactIcon } = useContext(AppContext);

  const [ inputDisable, setInputDisabel ] = useState(false);

  const [ inputName, setInputName ] = useState('');
  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputPhone, setInputPhone ] = useState('');
  const [ inputTextMsg, setInputTextMsg ] = useState('');
  const [ erroMsg, setErrorMsg ] = useState('');

  const handleSubmit = ( event ) => {
    event.preventDefault();
    
    if ( inputName.length < 3 ){
      setErrorMsg('Wpisz dane')
    }  else {
      setErrorMsg('');
      setInputDisabel(true);
      setInputTextMsg( `Wiadomość wysłana od ${inputName} \n email ${inputEmail} i telefon ${inputPhone} \n Treść: ${inputTextMsg}` );
    }
  }

  return ( 
    <div className='contact'>
      <div className='container'>
        <div className='contact-box'>
          <div className="contact-box-top">
            <h1>Kontakt: </h1>
            <form onSubmit={handleSubmit}>
              <div className='contact-box-top-data'>
                <input type='text' placeholder='Imię' value={inputName} onChange={ (event) => setInputName(event.target.value) } disabled = {inputDisable} />
                <input type='email' placeholder='Email' value={inputEmail} onChange={ (event) => setInputEmail(event.target.value) } disabled = {inputDisable} />
                <input type='number' placeholder='Telefon' value={inputPhone} onChange={ (event) => setInputPhone(event.target.value) } disabled = {inputDisable} />
                {contactIcon.map( icon => <img key={icon} src={icon} alt="icons media" width="50" height="50" /> )}
              </div>

              <span>{erroMsg}</span>

              <div className='contact-box-top-message'>
                <textarea placeholder='Wiadomość... ' rows="4" cols="100" value={inputTextMsg} onChange={ (event) => setInputTextMsg(event.target.value) } disabled = {inputDisable}></textarea>
                <button type="submit">Wyślij</button>
              </div>
            </form>

              <div className="contact-box-bottom">

                <div className='contact-box-bottom-1'>
                <p><img src={iconLocation} alt="icon locatiot" width="50" height="50" />Lokacja</p>
                <p><a href="tel:+44123456789" aria-label="email">Telefon: +00 123456789</a></p>
                <p><img src={iconMail} alt="icon mail" width="50" height="50" /><a href="mailto: mail@mail.com" aria-label="email">nazwa@nazwa.com</a></p>
                </div>

                <div className='contact-box-bottom-2'>
                  <h2>Użyteczne linki:</h2>
                  <ul>
                    <li><a href="#" aria-label="link">www.strona.pl</a></li>
                    <li><a href="#" aria-label="link">www.strona.pl</a></li>
                    <li><a href="#" aria-label="link">www.strona.pl</a></li>
                    <li><a href="#" aria-label="link">www.strona.pl</a></li>
                  </ul>
                </div>
                <div className='contact-box-bottom-3'>
                  <h2>Newsletter</h2>
                  <input type='text' placeholder='Wpisz email' />
                  <button>Zapisz się</button>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;