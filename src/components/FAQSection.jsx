export default function FAQSection({ get_color }) {
  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        <div className="mx-auto max-w-[1300px]">
          {/* Heading */}
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold text-martex-dark_text sm:text-[44px] xl:text-[55px]">
              Questions & Answers
            </h2>
            <p className="text-lg sm:text-xl text-martex-light_text xl:text-2xl">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 mt-16 sm:px-4 md:grid-cols-2 gap-x-4 xl:gap-x-16 gap-y-12">
            {/* Left Column */}
            <div className="space-y-12">
              <div>
                <h3 className="mb-4 text-xl font-bold xl:text-2xl text-martex-dark_text">
                  1. Getting started with Martex
                </h3>
                <p className="mt-3 text-base leading-relaxed xl:text-lg text-martex-light_text">
                  Etiam amet mauris suscipit in odio integer congue metus and
                  vitae arcu mollis blandit ultrice ligula egestas magna
                  suscipit lectus magna suscipit luctus blandit and laoreet
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold xl:text-2xl text-martex-dark_text">
                  2. What’s inside the package?
                </h3>
                <p className="mt-3 text-base leading-relaxed xl:text-lg text-martex-light_text">
                  An enim nullam tempor sapien gravida donec ipsum and enim
                  porta justo integer at velna vitae auctor integer congue undo
                  magna laoreet augue pretium purus pretium ligula
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold xl:text-2xl text-martex-dark_text">
                  3. How do I choose a plan?
                </h3>
                <ul className="mt-3 space-y-2 text-base list-disc list-inside xl:text-lg text-martex-light_text">
                  <li>
                    Fringilla risus, luctus mauris orci auctor purus ligula
                    euismod pretium purus pretium rutrum tempor sapien
                  </li>
                  <li>
                    Nemo ipsam egestas volute undo turpis purus lipsum primis
                    aliquam sapien quaerat sodales pretium a purus
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div>
                <h3 className="mb-4 text-xl font-bold xl:text-2xl text-martex-dark_text">
                  4. How does Martex handle my privacy?
                </h3>
                <p className="mt-3 text-base leading-relaxed xl:text-lg text-martex-light_text">
                  Quaerat sodales sapien euismod blandit purus a purus ipsum
                  primis in cubilia laoreet augue luctus dolor luctus
                </p>
                <p className="mt-3 text-base leading-relaxed xl:text-lg text-martex-light_text">
                  An enim nullam tempor sapien gravida donec congue metus. Vitae
                  arcu mollis blandit integer nemo volute velna
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold xl:text-2xl text-martex-dark_text">
                  5. I have an issue with my account
                </h3>
                <p className="mt-3 text-base leading-relaxed xl:text-lg text-martex-light_text">
                  Cubilia laoreet augue egestas and luctus donec curabite diam
                  vitae dapibus libero and quisque gravida donec neque blandit
                  justo aliquam molestie nunc sapien justo
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold xl:text-2xl text-martex-dark_text">
                  6. Can I cancel at anytime?
                </h3>
                <p className="mt-3 text-base leading-relaxed xl:text-lg text-martex-light_text">
                  An enim nullam tempor sapien gravida donec ipsum and enim
                  porta justo integer at velna vitae auctor integer congue undo
                  magna laoreet augue pretium purus pretium ligula
                </p>
              </div>
            </div>
          </div>
          {/* Get in Touch Btn */}
          <div className="flex items-center w-full gap-2 my-10">
            <div className="flex rounded-full gap-1 mx-auto text-center bg-[#f4f4f9] px-10 py-4">
              <span className="text-base sm:text-lg xl:text-2xl text-martex-light_text">
                Have any questions?
              </span>
              <div>
                <button
                  className={`text-base sm:text-lg xl:text-2xl ${get_color} underline font-bold hover:text-martex-dark_text transition-all duration-300`}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
