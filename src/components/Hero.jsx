import '../sweetAlertStyles.css'

const Hero = () => {
  return (
    <section id="about" className="grid justify-items-end md:relative md:mt-20 mt-12">
      <article className="bg-[#181823] min-h-[400px] md:max-w-[480px] m790:max-w-[525px] m820:max-w-[540px] m850:max-w-[565px] m880:max-w-[590px] m910:max-w-[625px] m940:max-w-[650px] m970:max-w-[675px] m1000:max-w-[710px] lg:max-w-[615px] lg:min-h-[530px] l1060:max-w-[640px] l1090:max-w-[670px] l1120:max-w-[700px] l1150:max-w-[730px] l1180:max-w-[760px] l1210:max-w-[800px] l1220:max-w-[830px] l1250:max-w-[840px] x1310:max-w-[820px] x1340:max-w-[830px] x1370:max-w-[860px] x1400:max-w-[890px] x1430:max-w-[920px] x1460:max-w-[950px] x1520:max-w-[990px] x1570:max-w-[1040px] xl:max-w-[760px] xl:min-h-[720px] min-[1600px]:max-w-[910px] min-[1600px]:min-h-[820px] x1630:[950px] x1660:max-w-[970px] overflow-hidden md:flex">
        <div className="md:absolute mx-6 md:mx-4 lg:mx-8 mt-6 md:-mt-4 left-0 md:top-9 xl:top-14 2xl:top-12">

          <img
            className="min-[280px]:w-[100%] md:w-[300px] lg:w-[420px] xl:w-[530px] min-[1600px]:w-[680px]"
            src="/images/kevinPhoto.svg"
            alt="Person photo"
          />
        </div>
        <div className="flex flex-col pt-7 md:p-11 lg:p-14 xl:p-16 min-[1600px]:p-4 gap-5 p-5 md:justify-center md:z-10">
          <h1 className="text-2xl text-center md:text-start font-bold md:text-4xl lg:text-4xl xl:text-5xl min-[1600px]:text-6xl min-[1600px]:text-center float-left relative ">
            I'm Kevin Cifuentes.
            <br />A full stack developer{" "}
            <span className="text-gray-400">based in <span className="text-yellow-400">Co</span><span className="text-blue-600">lom</span><span className="text-red-600">bia.</span></span>
            <span className="spanContainer">
              &#160;
            </span>
          </h1>

          <p className="py-4 text-base lg:text-xl xl:text-2xl xl:pt-8 min-[1600px]:text-2xl min-[1600px]:mx-14 text-center md:text-justify">
            Hello! Welcome to my portfolio. I'm 21 years old and I have kwnowings in frontend (Javascript) and backend (NodeJs) development. Also, I've knowings in librarys and frameworks like ReactJS, ExpressJS and Tailwind. Here, you can find my projects.
          </p>

          <div className='mx-auto pb-4'>
            <a className='py-3 px-0 w-36 bg-[#7510f7] rounded-xl md:hover:bg-[#5221e6] duration-200 ease-in flex justify-center gap-1' href="/CV-Kevin.pdf" download='CV-Kevin.pdf'><span>Download CV</span> <span className='pt-[1px]'><i className='bx bxs-spreadsheet text-gray-300 text-xs md:text-sm'></i></span></a>
          </div>
        </div>
      </article>
    </section>
  )
}
export default Hero
