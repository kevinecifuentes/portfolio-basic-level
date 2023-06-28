const Footer = () => {
  return (
    <footer className="bg-[#181823] py-14">
      <section className="grid md:grid-cols-2 plac">
        {/* left section  */}
        <section className="md:pl-10 mx-auto my-auto">
          <h3>Kevin Cifuentes</h3>
          <div className="flex gap-3 pt-2 items-center justify-center text-xl md:text-2xl">
            <span><i className="bx bxl-linkedin-square text-xl text-blue-600"></i></span>
            <span><i className='bx bxl-github'></i></span>
            <span><i className='text-green-400 bx bxl-netlify'></i></span>
          </div>
        </section>

        {/* right section  */}
        <section className="flex justify-center text-center pt-8 md:pt-0">
          <article className="">
            <ol className="list-none grid gap-4">
              <li className="hover:-translate-y-1 duration-150 ease-in">
                <a href="#">Home</a>
              </li>
              <li className="hover:-translate-y-1 duration-150 ease-in">
                <a href="#about">About</a>
              </li>
              <li className="hover:-translate-y-1 duration-150 ease-in">
                <a href="#principles">Principles</a>
              </li>
              <li className="hover:-translate-y-1 duration-150 ease-in">
                <a href="#works">Works</a>
              </li>
              <li className="hover:-translate-y-1 duration-150 ease-in">
                <a className="md:hover:text-gray-300 " href="#contact">Contact</a>
              </li>
            </ol>
          </article>
        </section>

      </section>

      <section className="flex justify-center pt-10 md:pt-6">
        <span className="text-center text-gray-400">© 2023</span>
      </section>

    </footer>
  )
}
export default Footer