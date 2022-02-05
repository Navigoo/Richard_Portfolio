import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("user_twHlPZayD8q3Ffohs1FwM");

export const Emailform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_09wa818', 'template_nv5dt5y', form.current, 'user_twHlPZayD8q3Ffohs1FwM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  function sayThanks() {
    alert('Thanks!, I get in touch with u as soon as possible.');
  }
  return (
    
    <form className="rc79__header-content__input" ref={form} onSubmit={sendEmail}>
    
      <input type="email" name="user_email" />
      <button onClick={sayThanks} type="submit" value="Send">Lets Talk</button>
    </form>
  );
};