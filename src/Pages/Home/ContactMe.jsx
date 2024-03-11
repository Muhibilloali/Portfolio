import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ephjt9j',
      'template_0gpywyi', 
      form.current, {
      publicKey: 'p1a_7LhgGVFO7Qhts',
      })

      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <section id="Contact" className="contact--section">
        <h2 className='contact-title'>Contact Me</h2>

        {/* contact-left-form */}
      <div className="contact-left-text">
        <p className="text-left-lg">
          <h3>Please fill in these to contact me.</h3>
        </p>

        <div className="contact-left">
          <form ref={form} onSubmit={sendEmail}>
           <label>Name</label>
            <input type="text" placeholder='Your name' name="user_name" required />
            <label>Email</label>
            <input type="email" placeholder='Your email' name="user_email" required/>
           <label>Message</label>
           <textarea name="message" placeholder='The message you want to send me...' required/>
            <input className='submit-btn' type="submit" value="Send" />
         </form>
        </div> 


        {/* <div className="contact-right-table">
        <p className="text-right-lg">
          <h3>My information.</h3>
        </p>
        <table className="contact-right">
          <tr>
            <td>My Name</td>
            <td>Muxibillo</td>
          </tr>
          <tr>
            <td>My Surname</td>
            <td>Abduqaxxorov</td>
          </tr>
          <tr>
            <td>My Email</td>
            <td>muhibilloabduqahhorov50@gmail.com</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>+998(99)105-25-15</td>
          </tr>
        </table>
      </div> */}
      </div>

      {/* contact-right-table */}
      {/* <div className="contact-right-table">
        <p className="text-right-lg">
          <h3>My information.</h3>
        </p>
        <table className="contact-right">
          <tr>
            <td>My Name</td>
            <td>Muxibillo</td>
          </tr>
          <tr>
            <td>My Surname</td>
            <td>Abduqaxxorov</td>
          </tr>
          <tr>
            <td>My Email</td>
            <td>muhibilloabduqahhorov50@gmail.com</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>+998(99)105-25-15</td>
          </tr>
        </table>
      </div> */}
    </section>
  );
}
