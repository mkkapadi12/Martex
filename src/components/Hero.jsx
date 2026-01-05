import hero from "../assets/images/hero-1-img.png";
import bg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="py-6 bg-fixed bg-center bg-no-repeat bg-cover sm:py-20"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-0 py-6 mx-auto max-w-7xl lg:flex-row">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Content is the key to building an audience
            </h1>
            <p className="py-10 text-2xl text-white">
              Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
              volute ligula and aliquet tortor
            </p>
            <button className="px-6 py-3 text-white bg-pink-500 rounded">
              Get Started for free
            </button>
            <p className="mt-4 text-lg text-white">
              No credit card needed, free 14-day trials
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={hero} alt="hero" className="w-full sm:w-[90%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
