const Experience = () => {
  return (
    <section className="bg-black min-h-full py-12 p-6">
      <section className="md:text-center lg:p-8 lg:w-[450px] lg:text-start">
        <h3 className="text-gray-400 font-semibold md:text-sm lg:text-sm">WORK EXPERIENCE</h3>
        <h2 className="pt-2 text-2xl font-bold lg:text-3xl">
          Companies I've worked for in the past.
        </h2>
      </section>

      <section className="md:grid md:text-center lg:grid lg:grid-cols-3 lg:gap-6 lg:p-6 lg:text-start">
        <article className=" pt-10">
          <h2 className="text-gray-400 text-8xl">01</h2>
          <h3 className="text-lg pt-4 font-bold">
            <span className="text-green-500">Google</span>, Interaction designer
          </h3>
          <p className="pt-3">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </p>
        </article>
        <article className=" pt-10">
          <h2 className="text-gray-400 text-8xl">02</h2>
          <h3 className="text-lg pt-4 font-bold">
            <span className="text-pink-500">Dribble</span>, Grapchic designer
          </h3>
          <p className="pt-3">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </p>
        </article>
        <article className=" pt-10">
          <h2 className="text-gray-400 text-8xl">03</h2>
          <h3 className="text-lg pt-4 font-bold">
            <span className="text-blue-600">Facebook</span>, Product designer
          </h3>
          <p className="pt-3">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </p>
        </article>
      </section>

    </section>
  )
}
export default Experience
