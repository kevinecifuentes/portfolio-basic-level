const Works = () => {
  return (
    <section id="works" className="pt-16 p-6 sm:grid sm:grid-cols-[repeat(1,_32rem)] sm:place-content-center sm:px-10 md:px-24 lg:grid lg:grid-cols-2 lg:gap-8 bg-black xl:grid-cols-[repeat(2,_36rem)] xl:place-content-center">

      {/* left section  */}
      <section>
        <h4 className="text-gray-400">MY PROJECTS</h4>
        <h2 className="text-2xl mt-2 md:mt-6 md:text-5xl font-semibold">Work that I've done for the past 1 year.</h2>

        <article className="bg-[#181823] mt-8 md:mt-14">
          <div>
            <img className="max-w-full" src="/images/Rectangle.png" alt="" />
          </div>

          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start">Restaurant website design</h3>
            <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
          </div>
        </article>

        <article className="mt-8 bg-[#181823]">

          <div>
            <img src="/images/Rectangle.png" alt="" />
          </div>

          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start">Restaurant website design</h3>
            <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
          </div>

        </article>

      </section>

      {/* rigth section  */}
      <section>
        <article className="bg-[#181823] mt-6 lg:mt-0">
          <div>
            <img src="/images/Rectangle.png" alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start">Restaurant website design</h3>
            <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
          </div>
        </article>

        <article className="mt-6 bg-[#181823]">
          <div>
            <img src="/images/Rectangle.png" alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-base md:text-2xl md:text-center lg:text-base lg:text-start">Restaurant website design</h3>
            <p className="pt-4 text-sm text-gray-400 md:text-lg md:text-center lg:text-sm lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil quaerat dolores. Pariatur quas illo voluptate provident veritatis omnis.</p>
          </div>
        </article>

        <div className="flex justify-center mt-10 lg:mt-20">
          <a href="https//facebook.com" className="p-6 border-2 border-[#5221E6]">VIEW ALL PROJECTS</a>
        </div>
      </section>

    </section>
  )
}
export default Works