import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
// import '../sweetAlertStyles.css'

const Contact = () => {

  const form = useRef();

  const handleReset = () => {
    form.current.reset()
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ua5w0in', 'template_hnrwx9f', form.current, 'w2kY0-2Akk-HNhkja')
      .then((result) => {
        console.log(result.text)
        handleReset()
        Swal.fire('Enviado con éxito')
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="bg-black p-12 md:px-16 lg:grid lg:grid-cols-2 py-16 lg:gap-8 lg:px-24">

      {/* left section  */}
      <article id='contact' className='my-auto mx-auto'>
        <h2 className="text-4xl font-bold">Let's talk business</h2>
        <p className="pt-8 text-gray-400">Now that you know a lot about me, let me if you're interested to work with me.</p>
      </article>
      <section className='text-white md:pt-10 lg:pt-0'>


        <form ref={form} className='grid gap-12 pt-12' onSubmit={sendEmail}>
          <div className='grid'>
            <label>Name <span className='text-red-500'>*</span></label>
            <input autoComplete='off' required type="text" name="user_name" className='bg-[#181823] p-4 outline-none mt-4 h-12 rounded-xl' />
          </div>
          <div className='grid'>
            <label>Email <span className='text-red-500'>*</span></label>
            <input autoComplete='off' required type="email" name="user_email" className='bg-[#181823] p-4 outline-none mt-4 h-12 rounded-xl' />
          </div>
          <div className='grid'>
            <label>Message <span className='text-red-500'>*</span></label>
            <textarea required name="message" className='bg-[#181823] p-4 outline-none mt-4 rounded-xl w-full' />
          </div>
          <button className='bg-[#5221e6] p-3 mx-auto rounded-lg hover:bg-purple-500'>
            <input type="submit" value="Send" />
          </button>

        </form>
      </section>
    </section>
  )
}

export default Contact
