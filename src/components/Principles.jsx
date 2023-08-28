const Principles = () => {
  return (
    <section className="bg-[#FFF3E4] text-black lg:grid lg:grid-cols-2">
      <section className="p-6 lg:px-10 lg:grid lg:my-auto">
        <div className="pt-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">Philosophy and Values.</h2>
          <p className="text-[#8491A0] mt-5">
            I think everyone wants the same thing - relationship with humanity,
            peace with the metaphysical, and experience with the universe. I try
            to grasp these things with my values: authenticity, creativity, &
            hospitality.
          </p>

          <div className="mt-24 flex items-center gap-3 md:justify-center lg:justify-start lg:mt-20">
            <a href="https://www.linkedin.com/in/kevin-cifuentes-786554189/" target="_blank">
              <h3 className="border-b-2 border-black md:hover:-translate-y-1 duration-150 ease-in md:hover:text-gray-600">Check my linkedin</h3>
            </a>
            <a href="https://www.linkedin.com/in/kevin-cifuentes-786554189/" target="_blank" className="md:hover:-translate-y-1 duration-200 ease-in">
              <i className="bx bxl-linkedin-square text-xl text-blue-600"></i>
            </a>
          </div>
        </div>
      </section>


      <section className="my-auto">
        <div className="bg-cover pt-10 lg:p-8">
          <img className="lg:rounded-xl" src="/images/principlesImage.jpg" alt="" />
        </div>
      </section>
    </section>
  )
}
export default Principles
