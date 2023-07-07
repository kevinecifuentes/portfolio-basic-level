const Footer = () => {
  return (
    <footer className="bg-[#181823] py-14">
      <section className="grid md:grid-cols-2 ">
        {/* left section  */}
        <section className="md:pl-10 mx-auto my-auto lg:text-2xl">
          <h3>Kevin Cifuentes</h3>
          <div className="flex gap-3 pt-2 items-center justify-center text-xl md:text-2xl lg:text-4xl">
            <a target="_blank" href="https://www.linkedin.com/in/kevin-cifuentes-786554189/"><i className="bx bxl-linkedin-square text-blue-600 lg:hover:translate-y-[2px] ease-in duration-150"></i></a>
            <a target="_blank" href="https://github.com/kevinecifuentes"><i className='bx bxl-github lg:hover:translate-y-[2px] ease-in duration-150'></i></a>
            <a target="_blank" href="https://app.netlify.com/teams/kevinecifuentes/overview"><i className='text-green-400 bx bxl-netlify lg:hover:translate-y-[2px] ease-in duration-150'></i></a>
          </div>
        </section>

        {/* right section  */}
        <section className="flex justify-center text-center pt-8 md:pt-0">
          <article className="">
            <ol className="list-none grid gap-4">
              <li className="md:hover:-translate-y-1 duration-150 ease-in">
                <a href="#">Home</a>
              </li>
              <li className="md:hover:-translate-y-1 duration-150 ease-in">
                <a href="#about">About</a>
              </li>
              <li className="md:hover:-translate-y-1 duration-150 ease-in">
                <a href="#principles">Principles</a>
              </li>
              <li className="md:hover:-translate-y-1 duration-150 ease-in">
                <a href="#works">Works</a>
              </li>
              <li className="md:hover:-translate-y-1 duration-150 ease-in">
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