const Lenguages = () => {
  return (
    <section className="bg-black grid grid-cols-2 h-[340px] 
    p-16 my-8 text-3xl md:grid-cols-6 md:text-4xl lg:text-6xl md:h-[200px] md:px-10">
      <div className="grid place-content-center">
        <span><i className='text-blue-600 bx bxl-css3 hover:animate-spin' ></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-yellow-500 bx bxl-javascript hover:animate-spin'></i></span>
      </div>

      <div className="grid place-content-center">
        <span><i className='text-[#149eca] bx bxl-react hover:animate-spin'></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-[#2496ee] bx bxl-docker hover:animate-spin' ></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-green-600 bx bxl-nodejs hover:animate-spin'></i></span>
      </div>

      <div className="grid place-content-center">
        <span><i className='text-[#38bdf8] bx bxl-tailwind-css hover:animate-spin'></i></span>
      </div>
    </section>
  )
}
export default Lenguages