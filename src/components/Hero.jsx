const NavbarAndHero = () => {
  return (
    <section id="about" className="grid justify-items-end md:relative mt-16">
      <article className="bg-[#181823] min-h-[400px] md:max-w-[480px] m790:max-w-[525px] m820:max-w-[540px] m850:max-w-[565px] m880:max-w-[590px] m910:max-w-[625px] m940:max-w-[650px] m970:max-w-[675px] m1000:max-w-[710px] lg:max-w-[615px] lg:min-h-[530px] l1060:max-w-[640px] l1090:max-w-[670px] l1120:max-w-[700px] l1150:max-w-[730px] l1180:max-w-[760px] l1210:max-w-[800px] l1220:max-w-[830px] l1250:max-w-[840px] x1310:max-w-[820px] x1340:max-w-[830px] x1370:max-w-[860px] x1400:max-w-[890px] x1430:max-w-[920px] x1460:max-w-[950px] x1520:max-w-[990px] x1570:max-w-[1040px] xl:max-w-[760px] xl:min-h-[720px] min-[1600px]:max-w-[910px] min-[1600px]:min-h-[820px] x1630:[950px] x1660:max-w-[970px] overflow-hidden md:flex">
        <div className="md:absolute left-0 top-14 xl:top-20 ">

          <img
            className="min-[375px]:w-[100%] md:w-[370px] lg:w-[520px] xl:w-[680px] min-[1600px]:w-[820px]"
            src="/images/heroImage.png"
            alt="Person photo"
          />
        </div>
        <div className="flex flex-col pt-7 md:pt-0 md:p-11 lg:p-14 xl:p-16 min-[1600px]:p-4 gap-5 p-5 md:justify-center md:z-10">
          <h1 className="text-3xl text-center md:text-start font-bold md:text-4xl lg:text-4xl xl:text-5xl min-[1600px]:text-6xl ">
            I'm Kevin Cifuentes.
            <br />A fronted developer{" "}
            <span className="text-gray-400">based in <span className="text-yellow-400">Co</span><span className="text-blue-600">lom</span><span className="text-red-600">bia.</span></span>
          </h1>
          <p className="py-4 text-lg lg:text-xl xl:text-2xl xl:pt-8 min-[1700px]:text-2xl">
            I'm probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I'm your guy.
          </p>
        </div>
      </article>
    </section>
  )
}
export default NavbarAndHero
