import hero from "../assets/images/hero-1-img.png";
import bg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="py-6 bg-fixed bg-center bg-no-repeat bg-cover pb-[70px] mt-[87px] sm:mt-0 lg:max-xl:pb-[80px] xl:pb-[100px] pt-[80px] xl:pt-[130px] lg:max-xl:pt-[120px]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container mx-auto xl:px-0 sm:px-4">
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row max-w-7xl">
          {/* text */}
          <div className="text-center sm:text-start xl:w-6/12 lg:max-xl:w-6/12 md:max-lg:w-6/12 w-full flex-[0_0_auto] sm:px-[calc(0.5*_1.5rem)] xl:px-0 max-w-full px-3">
            <h1 className="xl:mb-4 text-3xl font-bold !leading-[1.18] text-white sm:text-5xl xl:text-7xl">
              Content is the key to building an audience
            </h1>
            <p className="py-6 text-lg text-white sm:text-xl xl:py-10 xl:text-2xl">
              Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
              volute ligula and aliquet tortor
            </p>
            <button className="px-6 py-3 text-base font-semibold text-white rounded xl:text-lg xl:px-10 bg-martex-light_pink">
              Get Started for free
            </button>
            <p className="mt-4 text-base text-white xl:text-lg">
              No credit card needed, free 14-day trials
            </p>
          </div>
          {/* img */}
          <div className="flex items-center justify-center">
            <img src={hero} alt="hero" className="w-full sm:w-[90%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
