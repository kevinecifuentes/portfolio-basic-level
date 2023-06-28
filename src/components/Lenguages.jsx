const Lenguages = () => {
  return (
    <section className="bg-black grid grid-cols-2 h-[340px] pt-14 text-3xl md:grid-cols-6 md:text-4xl md:h-[200px] md:px-10">
      <div className="grid place-content-center">
        <span><i className='text-blue-600 bx bxl-css3' ></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-orange-500 bx bxl-html5' ></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-[#149eca] bx bxl-react'></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-orange-600 bx bxl-git'></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-yellow-500 bx bxl-javascript'></i></span>
      </div>
      <div className="grid place-content-center">
        <span><i className='text-[#38bdf8] bx bxl-tailwind-css'></i></span>
      </div>
    </section>
  )
}
export default Lenguages