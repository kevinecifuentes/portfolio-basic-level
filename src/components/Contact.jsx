import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../sweetAlertStyles.css'

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
    <section id='contact' className="bg-black p-12 md:px-16 lg:grid lg:grid-cols-2 py-16 lg:gap-8 lg:px-24">

      {/* left section  */}
      <article className='my-auto mx-auto'>
        <h2 className="text-4xl font-bold">Let's talk business</h2>
        <p className="pt-8 text-gray-400">If you want contact with me or have any question, let me now and write me in the input!
        </p>

        <p className='mt-14 text-center text-gray-400'>Or contact with me in WhatsApp.</p>

        <div className='flex justify-center pt-10 gap-1'>
          <a target='_blank' href='https://api.whatsapp.com/send?phone=573507189563' className='text-[#25d366] text-center text-5xl md:hover:text-green-600 ease-in duration-150'><i className='bx bxl-whatsapp'></i></a>
        </div>

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
          <button className='bg-[#7066e0] p-3 mx-auto rounded-lg hover:bg-[#5221e6] duration-200 ease-in'>
            <input type="submit" value="Send" />
          </button>

        </form>
      </section>
    </section>
  )
}

export default Contact

