import Content from "./Content";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative  ">
      <Navbar />

      <picture className="relative md:flex md:justify-center md:items-center ">
        <source media="(min-width: 	1023px)" srcSet="/images/mockDesktopp.png" />

        <source media="(max-width: 1024px)" srcSet="/images/mock.png" />

        <img
          className="  pt-7 md:pt-0 md:mt-0   "
          src="/images/mock.png"
          alt="Imagen responsive"
        />
        <button className="bg-violeta rounded-[40px] p-5  hover:bg-violet-400   text-white font-bold md:text-[28px] w-[240px] md:w-[300px] md:h-[90px] absolute z-10  bottom-[270px] left-[20px]  lg:bottom-[80px] lg:left-[550px] ">
          Shop now
        </button>
        <Content />
      </picture>
    </section>
  );
};

export default Hero;
