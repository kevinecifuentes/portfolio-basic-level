const Skillset = () => {
  return (
    <section className="px-8 pt-10 bg-black md:flex md:gap-8 lg:gap-0 md:px-16 lg:px-20 text-justify justify-center">

      <section className="md:w-[370px] lg:w-[330px] xl:w-[700px] my-auto lg:p-10">
        <h3 className="font-bold text-3xl">Skillset</h3>
        <p className="text-[#8491A0] mt-6">I've skills in diferent areas of programming. Anything you want, i can do. I'm here to make whatever you have in mind come true. I know about frameworks, some languages like JS, version controllers and some design tools too. </p>
      </section>

      <section className="grid grid-cols-2 justify-items-center pt-6 gap-6 md:gap-14 md:grid-cols-[repeat(2,_10rem)] lg:grid-cols-[repeat(2,_15rem)] xl:grid-cols-2 w-full">
        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Frameworks</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>React (library)</li>
              <li className="pt-2">Tailwind</li>
              <li className="pt-2">Wordpress</li>
            </ol>
          </div>
        </article>

        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Languages</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>Java Script</li>
              <li className="pt-2">CSS</li>
              <li className="pt-2">HTML</li>
            </ol>
          </div>
        </article>

        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Version <br />Controllers</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>Git</li>
            </ol>
          </div>
        </article>

        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Design tools</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>Figma</li>
            </ol>
          </div>
        </article>
      </section>
    </section>
  )
}
export default Skillset