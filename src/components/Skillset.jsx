const Skillset = () => {
  return (
    <section id="skillset" className="px-8 pt-10 bg-black md:flex md:gap-8 lg:gap-0 md:px-16 lg:px-20 text-start justify-center">

      <section className="md:w-[370px] lg:w-[330px] xl:w-[700px] my-auto lg:p-10">
        <h3 className="font-bold text-3xl">Skillset</h3>
        <p className="text-[#8491A0] mt-6">I've skills in different areas of programming. I'm here to give the best of me working really hard to do your wishes come true.</p>
      </section>

      <section className="grid grid-cols-2 justify-items-center pt-6 gap-6 md:gap-14 md:grid-cols-[repeat(2,_10rem)] lg:grid-cols-[repeat(2,_15rem)] xl:grid-cols-2 w-full">
        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Frontend</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li className="pt-2">Javascript</li>
              <li className="pt-2">CSS</li>
              <li className="pt-2">HTML</li>
              <li className="pt-2">React</li>
              <li className="pt-2">Tailwind</li>
            </ol>
          </div>
        </article>

        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Backend</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>Node JS</li>
              <li className="pt-2">Express</li>
              <li className="pt-2">Docker</li>
              <li className="pt-2">SQL</li>
              <li className="pt-2">ORM</li>
            </ol>
          </div>
        </article>

        {/* <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Version <br />Controllers</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>Git</li>
            </ol>
          </div>
        </article> */}

        {/* <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Design tools</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>Figma</li>
            </ol>
          </div>
        </article> */}
      </section>
    </section>
  )
}
export default Skillset