const Hobbies = () => {
  return (
    <section id="hobbies" className="bg-black min-h-full p-6 pt-0 pb-16">
      <section className="md:text-center lg:p-8 lg:pt-0 lg:w-[450px] lg:text-start">
        <h3 className="text-gray-400 font-semibold md:text-sm lg:text-sm">HOBBIES</h3>
        <h2 className="pt-2 text-2xl font-bold lg:text-3xl">
          I have severals hobbies, like:
        </h2>
      </section>

      <section className="md:grid md:text-center lg:grid lg:grid-cols-3 lg:gap-6 lg:p-6 lg:text-start">
        <article className="">
          <h3 className="text-lg pt-4 font-bold text-green-500"> <span className="text-2xl"> <i className="fa-solid fa-guitar"></i></span> Play the guitar

          </h3>
          <p className="pt-3">
            I like to play the guitar in my free times. I take it just like a hobbie, but I try to practice often. I play it 5 years ago.
          </p>
        </article>
        <article >
          <h3 className="text-lg pt-4 font-bold text-pink-500">
            <span className="text-2xl"> <i className="fa-solid fa-gamepad"></i></span> Play videogames
          </h3>
          <p className="pt-3">
            I like to play videogames with my friends. Specifically shooter games. When I play videogames have a lot of fun with my friends and that makes me feel good.
          </p>
        </article>
        <article>
          <h3 className="text-lg pt-4 font-bold text-blue-600"><span className="text-2xl"><i className="fa-solid fa-book"></i></span> Read
          </h3>
          <p className="pt-3">
            I try to read every days. I think the reading is very important to improve your comunication skills. Also, read gives me a lot of knowledge and learning about diversal topics. And open my mind to new perspectives.
          </p>
        </article>
      </section>

    </section>
  )
}
export default Hobbies
