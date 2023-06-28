import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";

const ContactMe = () => {
  const form = useRef();

  const handleReset = () => {
    form.current.reset()
  }

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ua5w0in",
        "template_hnrwx9f",
        form.current,
        "w2kY0-2Akk-HNhkja"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleReset();
          Toast.fire({
            icon: "success",
            title: "Mensaje enviado con éxito!",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="font-sen pb-16 lg:grid lg:grid-cols-2 lg:px-4 lg:mt-16">
      <article className="">
        <p className="text-white text-2xl font-bold px-4 pt-20">
          Let's talk business
        </p>
        <p className="text-[#8491A0] px-4 mt-3">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </article>
      <form ref={form} onSubmit={sendEmail} className="grid text-white px-4">
        <section className="grid px-4 mt-6">
          <article className="text-[#98a7b8]">
            <div className="grid gap-2">
              <label htmlFor="user_name">Name</label>
              <input
                required
                type="text"
                name="user_name"
                className="bg-[#22262B] outline-none p-2"
              />
            </div>
          </article>

          <article className="text-[#98a7b8] mt-2">
            <div className="grid gap-2">
              <label htmlFor="user_email">Email</label>
              <input
                required
                type="email"
                name="user_email"
                className="bg-[#22262B] outline-none p-2"
              />
            </div>
          </article>
          <article className="text-[#98a7b8] mt-2">
            <div className="grid gap-2">
              <label>Message</label>
              <textarea
                required
                name="message"
                className="text-[#98a7b8] bg-[#22262B] text-justify outline-none w-full px-2"
                cols="30"
                rows="6"
              />
            </div>
          </article>

          <div className="flex justify-center mt-6 ">
            <button className="bg-gradient-to-r  from-green-300 to-blue-500 font-sen font-bold text-bla text-black cursor-pointer px-10 py-4 hover:to-blue-400">
              <input type="submit" value="Send" />
            </button>
          </div>

        </section>
      </form>
    </section>
  )
}
export default ContactMe