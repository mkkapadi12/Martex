import Navbar from "../components/Navbar";
import Footer from "../Helper/Footer";
import logoblue from "./../assets/images/logo-blue.png";

export default function Privacy() {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };

  return (
    <section className="bg-[#f6f7fb]">
      <Navbar data={data} />
      <div className="container max-w-[1080px] mx-auto pt-[160px] xl:pt-[180px] pb-14 xl:pb-20 px-4 sm:px-14 lg:px-16 xl:px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl text-martex-dark_text lg:text-5xl xl:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-xl text-martex-light_text sm:text-base lg:text-xl xl:text-2xl">
            This policy is effective as of 11th November 2022
          </p>
        </div>

        {/* Content */}
        <div className="space-y-16 leading-relaxed text-martex-light_text">
          {/* 1 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="text-2xl font-bold mb-7 xl:text-4xl lg:text-3xl text-martex-dark_text">
              1. Introduction
            </h2>
            <p className="">
              Sagittis congue augue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lacinia placerat and nulla justo
              molestie blandit justo diam aliquet tortor molestie sagittis
              lacinia undo and mullam molestie diam luctus donec bibendum
              aliquet massa elementum. Libero quisque lacus and ligula massa
              lorem.
            </p>
            <p className="mt-5">
              Sagittis congue augue egestas integer velna purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce an aliquam nulla lacinia justo
              molestie blandit justo diam aliquet tortor molestie non sagittis
              lacinia.
            </p>
          </div>

          {/* 2 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="text-2xl font-bold mb-7 xl:text-4xl lg:text-3xl text-martex-dark_text">
              2. Personal Information We Collect
            </h2>
            <div className="mt-8">
              <h2 className="text-xl font-bold xl:lg:text-3xl lg:text-2xl text-martex-dark_text">
                2.1. Information you provide to us
              </h2>
              <p className="mt-5">
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lorem nulla an
                aliquam acinia justo molestie blandit justo diam an aliquet
                tortor sagittis lacinia molestie diam egestas
              </p>
            </div>
            <ul className="mt-5 ml-5 space-y-4 list-disc">
              <li>
                Quaerat sodales sapien undo velna purus euismod purus velna
                blandit vitae auctor and congue magna tempor sapien gravida
                laoreet turpis urna augue, viverra a augue eget dictum tempor
              </li>
              <li>
                Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                sodales sapien congue and augue egestas
              </li>
              <li>
                Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                sodales sapien congue augue egestas sagittis massa lorem fusce
                cursus fusce nulla vitae massa placerat vulputate purus
              </li>
              <li>
                Sapien sodales quaerat undo velna purus euismod purus velna
                blandit vitae auctor and congue magna tempor sapien gravida
                laoreet turpis urna augue, viverra a augue eget dictum pulvinar
              </li>
            </ul>
            <div className="mt-8">
              <h2 className="text-xl font-bold xl:lg:text-3xl lg:text-2xl text-martex-dark_text">
                2.2. Automatic data collection
              </h2>
              <p className="mt-5">
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce
              </p>
              <p className="mt-5">
                Sagittis congue augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce an aliquam nulla
                lacinia justo molestie blandit justo diam aliquet tortor
                molestie non sagittis lacinia
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold xl:lg:text-3xl lg:text-2xl text-martex-dark_text">
                2.3. User comments and contents
              </h2>
              <p className="mt-5">
                Integer congue sagittis augue egestas velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque diam augue fusce sapien nulla a
                primis lacinia ipsum a molestie blandit and justo an aliquet
                eget molestie sagittis at quaerat sodales
              </p>
            </div>
            <ul className="mt-5 ml-5 space-y-4 list-disc">
              <li>
                Quaerat sodales sapien undo velna purus euismod purus velna
                blandit vitae auctor and congue magna tempor sapien gravida
                laoreet turpis urna augue, viverra a augue eget dictum
              </li>
              <li>
                Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                sodales sapien congue and augue egestas
              </li>
            </ul>
            <div className="mt-8">
              <h2 className="text-xl font-bold xl:lg:text-3xl lg:text-2xl text-martex-dark_text">
                2.4. Information from other sources
              </h2>
              <p className="mt-5">
                Sagittis congue augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lacinia placerat
                and nulla justo molestie blandit justo diam aliquet tortor
                molestie sagittis lacinia undo and mullam molestie diam luctus
                donec bibendum aliquet massa elementum. Libero quisque lacus and
                ligula massa lorem.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="text-2xl font-bold mb-7 xl:text-4xl lg:text-3xl text-martex-dark_text">
              3. Types of Information
            </h2>
            <p className="mt-5">
              Integer congue sagittis augue egestas velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque diam augue fusce sapien nulla a primis lacinia
              ipsum a molestie blandit and justo an aliquet eget molestie
              sagittis at quaerat sodales
            </p>
            <p className="mt-5">
              Aliqum mullam tincidunt a sapien gravida and diam donec porta.
            </p>
            <p className="mt-5">
              Sagittis congue augue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lacinia placerat and nulla justo
              molestie blandit justo diam aliquet tortor molestie sagittis
              lacinia undo and mullam molestie diam luctus donec bibendum
              aliquet massa elementum. Libero quisque lacus and ligula massa
              lorem.
            </p>
          </div>

          {/* 4 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="mb-4 text-2xl font-bold xl:text-4xl lg:text-3xl text-martex-dark_text">
              4. How We Use Personal Information
            </h2>
            <p className="mt-5">
              Congue augue sagittis egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lorem nulla an aliquam lacinia
              justo molestie blandit justo diam an aliquet tortor sagittis
              lacinia molestie diam egestas
            </p>
            <p className="mt-5">
              Sagittis augue congue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque aliquam fusce blandit
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-bold lg:text-3xl text-martex-dark_text">
                4.1. In mails and contact forms
              </h2>
              <p className="mt-5">
                Integer congue sagittis augue egestas velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque diam augue fusce sapien
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="mb-6 text-2xl font-bold xl:text-4xl lg:text-3xl text-martex-dark_text">
              5. Price and Taxes
            </h2>
            <ul className="mb-4 ml-5 space-y-4 list-disc">
              <li>
                Quaerat sodales sapien undo velna purus euismod purus velna
                blandit vitae auctor and congue magna tempor sapien gravida
                laoreet turpis urna augue, viverra a augue eget diam pulvinar
              </li>
              <li>
                Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                sodales sapien congue and augue egestas
              </li>
            </ul>
            <p className="">
              Augue congue sagittis egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque donec and ipsum porta diam lorem sodales an
              aliquam lacinia justo sapien congue aliquet and sodales a quaerat
              tortor lacinia egestas
            </p>
          </div>

          {/* 6 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="mb-6 text-2xl font-bold xl:text-4xl lg:text-3xl text-martex-dark_text">
              6. Data Shared with Third Parties
            </h2>
            <p className="">
              Integer congue sagittis augue egestas velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque diam augue fusce sapien
            </p>
            <p className="mt-5">
              Sagittis augue congue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec and augue luctus congue
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-bold lg:text-3xl text-martex-dark_text">
                6.1. Refunds
              </h2>
              <p className="mt-5">
                Integer congue sagittis augue egestas velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque diam augue fusce sapien nulla a
                primis lacinia ipsum a molestie blandit and justo an aliquet
                eget molestie sagittis at quaerat sodales
              </p>
              <p className="mt-5">
                Aliqum mullam tincidunt a sapien gravida and diam donec porta.
              </p>
            </div>
          </div>

          {/* 7 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="mb-6 text-2xl font-bold xl:text-4xl lg:text-3xl text-martex-dark_text">
              7. Security
            </h2>
            <p className="">
              Sagittis congue augue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lacinia placerat and nulla justo
              molestie blandit justo diam aliquet tortor molestie sagittis
              lacinia undo and mullam molestie diam luctus donec bibendum
              aliquet massa elementum. Libero quisque lacus and ligula massa
              lorem fusce cursus fusce nulla vitae massa placerat and mollis,
              sapien gravida aliquet ipsum ultrices aliquet lorem diam purus
              undo vitae aliquam auris dapibus libero fusce blandit.
            </p>
          </div>

          {/* 8 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="mb-6 text-2xl font-bold xl:text-4xl lg:text-3xl text-martex-dark_text">
              8. Changes in the Privacy Policy
            </h2>
            <p className="">
              Congue augue sagittis egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lorem nulla an aliquam lacinia
              justo molestie blandit justo diam an aliquet tortor sagittis
              lacinia molestie diam egestas
            </p>
            <p className="mt-5">
              Sagittis augue congue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque aliquam fusce blandit
            </p>
          </div>

          {/* 9 */}
          <div className="text-[17px] md:text-[14px] xl:text-xl">
            <h2 className="mb-6 text-2xl font-bold xl:text-4xl lg:text-3xl text-martex-dark_text">
              9. How to Contact Us
            </h2>
            <p className="mt-5">
              If you have any questions or suggestions about this Terms of
              Service, do not hesitate to contact us at
            </p>
            <a href="mailto:yourdomain.com" className="inline-block mt-3">
              <span className="mt-3 text-base xl:text-lg text-[#1680fb] underline font-semibold  hover:text-martex-dark_text transition-all duration-300">
                hello@yourdomain.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
