const Skillset = () => {
  return (
    <section className="px-6 pt-10 bg-black md:flex md:gap-8 lg:gap-0 md:px-16">

      <section className="md:w-[350px] lg:w-[330px] xl:w-[700px] my-auto lg:p-10">
        <h3 className="font-bold text-3xl">Skillset</h3>
        <p className="text-[#8491A0] mt-6">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
      </section>

      <section className="grid grid-cols-2 justify-items-center pt-6 gap-6 md:gap-14 md:grid-cols-[repeat(2,_12rem)] lg:grid-cols-[repeat(2,_16rem)] xl:grid-cols-[repeat(2,_20rem)]">
        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Frameworks</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>React (library)</li>
              <li>Tailwind</li>
              <li>Wordpress</li>
            </ol>
          </div>
        </article>

        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Frameworks</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>React (library)</li>
              <li>Tailwind</li>
              <li>Wordpress</li>
            </ol>
          </div>
        </article>

        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Frameworks</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>React (library)</li>
              <li>Tailwind</li>
              <li>Wordpress</li>
            </ol>
          </div>
        </article>

        <article className="mt-8">
          <div>
            <img src="/images/puzzle.png" alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-base lg:text-2xl md:text-xl">Frameworks</h3>
            <ol className="pt-4 list-none text-[#8491A0] text-sm md:text-base">
              <li>React (library)</li>
              <li>Tailwind</li>
              <li>Wordpress</li>
            </ol>
          </div>
        </article>
      </section>
    </section>
  )
}
export default Skillset