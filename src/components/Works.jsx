const Works = () => {
  return (
    <section id="works" className="pt-24 p-6 sm:grid sm:grid-cols-[repeat(1,_32rem)] sm:place-content-center sm:px-10 md:px-24 lg:grid lg:grid-cols-[repeat(2,24rem)] lg:gap-8 bg-black xl:grid-cols-[repeat(2,_30rem)] xl:place-content-center">

      {/* left section  */}
      <section>
        <h4 className="text-gray-400">MY PROJECTS</h4>
        <h2 className="text-2xl mt-2 md:mt-6 md:text-5xl font-semibold">Works that I have done.</h2>

        <article className="bg-[#181823] mt-8 md:mt-14 rounded-xl">
          <div>
            <img className="rounded-t-xl" src="/images/pokeApi.png" alt="" />
          </div>

          <div className="p-6">
            <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Poke Api</h3>
            <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">An app with http request incorpored from an Api. With input, search filters, local storage, dark mode. The styles are made with Tailwind.</p>
          </div>
        </article>

        <article className="mt-8 bg-[#181823] rounded-xl">

          <div>
            <img className="rounded-t-xl" src="/images/Morty.png" alt="" />
          </div>

          <div className="p-6">
            <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Rick and Morty app</h3>
            <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">A page with request from axios library. It show us all characters of all dimensions. With a controlled input.</p>
          </div>

        </article>

      </section>

      {/* rigth section  */}
      <section>
        <article className="bg-[#181823] mt-6 lg:mt-0 rounded-xl">
          <div>
            <img className="rounded-t-xl" src="/images/weatherApp.png" alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Weather App</h3>
            <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">This mini app, give you the weather of the site that you indicate it. And it change the image acording to the weather.</p>
          </div>
        </article>

        <article className="mt-6 bg-[#181823] rounded-xl">
          <div>
            <img className="rounded-t-xl" src="/images/usersApp.png" alt="" />
          </div>
          <div className="p-6">
            <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Users input</h3>
            <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">This input, has the delete, update and create request. With conditional rendering, acording to the info that the user puts in the input.</p>
          </div>
        </article>

        <div className="flex justify-center mt-10 lg:mt-20">
          <a target="_blank" href="https://github.com/kevinecifuentes" className="p-6 border-2 border-[#7066e0] md:hover:border-[#5221e6] duration-200 ease-in">VIEW ALL PROJECTS</a>
        </div>
      </section>

    </section>
  )
}
export default Works