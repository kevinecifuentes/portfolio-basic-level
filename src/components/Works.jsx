const Works = () => {
  return (
    <section id="works" className="pt-24 p-6 sm:grid sm:grid-cols-[repeat(1,_32rem)] sm:place-content-center sm:px-10 md:px-24 lg:grid lg:grid-cols-[repeat(2,24rem)] lg:gap-8 bg-black xl:grid-cols-[repeat(2,_30rem)] xl:place-content-center">

      {/* left section  */}
      <section>
        <h4 className="text-gray-400">MY PROJECTS</h4>
        <h2 className="text-2xl mt-2 md:mt-6 md:text-5xl font-semibold">Works that I have done.</h2>

        <a target="_blank" href="https://poke-api-kef.netlify.app/">
          <article className="bg-[#181823] hover:opacity-80 hover:ease-in-out hover:duration-300 mt-8 md:mt-14 rounded-xl">
            <div>
              <img className="rounded-t-xl" src="/images/pokeApi.png" alt="" />
            </div>

            <div className="p-6">
              <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Poke Api</h3>
              <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">An app with http request from an Api incorpored. With input, search filters, local storage, dark mode. The styles are made with Tailwind.</p>
            </div>

            <div className="flex items-center gap-3 justify-center pb-6">
              <a href="https://github.com/ErickCoder/poke-api.git" target="_blank">
                <h3 className="border-b-2 border-white text-gray-300 pb-1 hover:lg:text-gray-400 hover:lg:border-gray-400 duration-150 ease-in">GitHub Repository</h3>
              </a>
              <a href="https://github.com/ErickCoder/poke-api.git" target="_blank">
                <i className="bx bxl-github text-xl text-white hover:lg:text-gray-400 duration-150 ease-in"></i>
              </a>
            </div>
          </article>
        </a>

        <a target='_blank' href="https://page-rick-and-morty.netlify.app/">
          <article className="mt-8 bg-[#181823] hover:opacity-80 hover:ease-in-out hover:duration-300 rounded-xl">

            <div>
              <img className="rounded-t-xl" src="/images/Morty.png" alt="" />
            </div>

            <div className="p-6">
              <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Rick and Morty app</h3>
              <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">A page with request from axios library. It shows us all characters of all dimensions. With a controlled input.</p>
            </div>

            <div className="flex items-center gap-3 justify-center pb-6">
              <a href="https://github.com/kevinecifuentes/rick-and-morty.git" target="_blank">
                <h3 className="border-b-2 border-white text-gray-300 pb-1 hover:lg:text-gray-400 hover:lg:border-gray-400 duration-150 ease-in">GitHub Repository</h3>
              </a>
              <a href="https://github.com/kevinecifuentes/rick-and-morty.git" target="_blank">
                <i className="bx bxl-github text-xl text-white hover:lg:text-gray-400 duration-150 ease-in"></i>
              </a>
            </div>

          </article>
        </a>

      </section>

      {/* rigth section  */}
      <section>
        <a target="_blank" href="https://kevin-weather-app.netlify.app/">
          <article className="bg-[#181823] mt-6 lg:mt-0 hover:opacity-80 hover:ease-in-out hover:duration-300 rounded-xl">
            <div>
              <img className="rounded-t-xl" src="/images/weatherApp.png" alt="" />
            </div>
            <div className="p-6">
              <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Weather App</h3>
              <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">This mini app, gives you the weather of the site that you indicate it. And it change the image acording to the weather.</p>
            </div>

            <div className="flex items-center gap-3 justify-center pb-6">
              <a href="https://github.com/kevinecifuentes/weather-app.git" target="_blank">
                <h3 className="border-b-2 border-white text-gray-300 pb-1 hover:lg:text-gray-400 hover:lg:border-gray-400 duration-150 ease-in">GitHub Repository</h3>
              </a>
              <a href="https://github.com/kevinecifuentes/weather-app.git" target="_blank">
                <i className="bx bxl-github text-xl text-white hover:lg:text-gray-400 duration-150 ease-in"></i>
              </a>
            </div>
          </article>
        </a>

        <a target='_blank' href="https://registration-users-app-jkf.netlify.app/">
          <article className="mt-6 bg-[#181823] hover:opacity-80 hover:ease-in-out hover:duration-300 rounded-xl">
            <div>
              <img className="rounded-t-xl" src="/images/usersApp.png" alt="" />
            </div>
            <div className="p-6">
              <h3 className="text-lg md:text-3xl md:text-center lg:text-base lg:text-start">Users input</h3>
              <p className="pt-4 text-sm text-gray-300 md:text-xl text-justify lg:text-sm lg:text-start">This input, has the delete, update and create request. With conditional rendering, acording to the info that the user puts in the input.</p>
            </div>

            <div className="flex items-center gap-3 justify-center pb-6">
              <a href="https://github.com/JesusBernal2020/registration-users-app.git" target="_blank">
                <h3 className="border-b-2 border-white text-gray-300 pb-1 hover:lg:text-gray-400 hover:lg:border-gray-400 duration-150 ease-in">GitHub Repository</h3>
              </a>
              <a href="https://github.com/JesusBernal2020/registration-users-app.git" target="_blank">
                <i className="bx bxl-github text-xl text-white hover:lg:text-gray-400 duration-150 ease-in"></i>
              </a>
            </div>
          </article>
        </a>

        <div className="flex justify-center mt-10 lg:mt-20">
          <a target="_blank" href="https://github.com/kevinecifuentes" className="p-6 border-2 border-[#7510f7] md:hover:border-[#292731f7] duration-200 ease-in">VIEW ALL PROJECTS</a>
        </div>
      </section>

    </section>
  )
}
export default Works