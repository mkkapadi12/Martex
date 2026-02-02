import React from "react";
import Navbar from "../components/Navbar";
import logoblue from "../assets/images/logo-blue.png";
import { Button } from "./../components/ui/button";
import Footer from "../Helper/Footer";

const responsibilities = [
  "Blandit velna vitae auctor congue magna and tempor sapien a gravida laoreet turpis",
  "Nemo ipsam egestas volute turpis dolores an aliquam quaerat sodales sapien congue and egestas",
  "Quaerat sodales sapien euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, viverra a augue eget pulvinar",
  "Vitae auctor blandit velna congue magna and tempor sapien a turpis laoreet gravida",
  "Laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar dictum tempor sagittis",
  "Euismod purus blandit viverra undo augue dictum sapien tempor diam pulvinar",
  "Vitae auctor ipsum congue magna tempor sapien eget gravida laoreet turpis",
];

const lookingFor = [
  "Sodales sapien quaerat euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, augue eget a viverra pulvinar laoreet augue luctus donec",
  "Sodales sapien quaerat euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, augue eget a viverra pulvinar",
  "Blandit velna vitae auctor congue magna and tempor sapien a gravida laoreet turpis",
  "Nemo ipsam egestas volute turpis dolores an aliquam quaerat sodales sapien congue and egestas",
  "Quaerat sodales sapien euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, viverra a augue eget pulvinar",
];

export const benefitsData = [
  {
    title: "Flexible time off",
    description:
      "Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo velna vitae auctor congue magna nihil impedit ligula risus.",
  },
  {
    title: "Healthcare",
    description:
      "Blandit tempor sapien aliqum mullam gravida donec ipsum, at porta justo velna vitae auctor congue mauris and donec magnis sapien",
  },
  {
    title: "The latest hardware",
    description:
      "Mauris donec mullam blandit at tempor sapien gravida donec ipsum, at porta justo velna vitae auctor congue magna nihil impedit ligula",
  },
  {
    title: "Ergonomic equipment",
    description:
      "Sapien gravida donec ipsum porta justo velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis sagittis tempor",
  },
];

const CareersRole = () => {
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
    <section className="pt-[80px] xl:pt-[180px] lg:max-xl:pt-[160px] md:max-lg:pt-[70px] mt-[80px] sm:mt-0 md:max-lg:mt-[80px]">
      <Navbar data={data} />
      <div className="xl:max-w-[1080px] mx-auto sm:max-w-5xl xl:px-0 px-4 sm:px-10">
        <div className="container mx-auto text-martex-light_text">
          {/* title */}
          <div className="pb-10 space-y-6 sm:space-y-7 xl:space-y-10">
            <h5 className="text-sm font-medium uppercase xl:text-base">
              Engineering
            </h5>
            <div className="space-y-3 sm:space-y-5 xl:space-y-6">
              <h1 className="text-3xl font-semibold sm:text-5xl xl:text-6xl text-martex-dark_text">
                Engineering Tech Lead
              </h1>
              <h4 className="text-lg xl:text-[22px]">
                Vancouver, British Columbia, Canada / Remote
              </h4>
            </div>
            <div className="space-y-6 text-base xl:text-lg/8">
              <p>
                Sagittis congue augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lacinia placerat
                and nulla justo molestie blandit justo diam aliquet tortor
                molestie sagittis lacinia undo and mullam molestie diam luctus
                donec bibendum aliquet massa elementum. Libero quisque lacus and
                ligula massa lorem fusce cursus fusce nulla vitae massa placerat
                and mollis, sapien gravida aliquet ipsum ultrices aliquet lorem
                diam purus undo vitae aliquam auris dapibus libero fusce
                blandit.
              </p>
              <p>
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lorem nulla an
                aliquam lacinia justo molestie blandit justo diam an aliquet
                tortor sagittis lacinia molestie diam egestas
              </p>
            </div>
          </div>
          <div className="py-12 border-t-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
                What would you do at Martex?
              </h3>
              <div className="space-y-6 text-base xl:text-lg/8">
                <p>
                  Congue sagittis augue egestas integer velna purus purus magna
                  nec suscipit and egestas magna aliquam ipsum vitae purus justo
                  lacus ligula ipsum primis cubilia donec undo augue luctus
                  vitae egestas a molestie donec libero sapien dapibus congue
                  tempor undo quisque fusce cursus neque blandit fusce aliquam
                </p>
                <p>
                  Congue augue sagittis egestas integer velna purus purus magna
                  nec suscipit and egestas magna aliquam ipsum vitae purus justo
                  lacus ligula ipsum primis cubilia donec undo augue luctus
                  vitae egestas a molestie donec libero sapien dapibus congue
                  tempor undo quisque fusce cursus neque blandit fusce lorem
                  nulla an aliquam lacinia justo molestie blandit justo diam an
                  aliquet tortor sagittis lacinia molestie diam egestas
                </p>
              </div>
            </div>
          </div>
          {/* Responsibilities */}
          <div className="py-12 space-y-5 border-t-2">
            <h3 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
              Responsibilities
            </h3>
            <ul className="ml-5 space-y-3 list-disc xl:text-lg">
              {responsibilities.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          {/* Who we're looking for */}
          <div className="py-12 space-y-5 border-t-2">
            <h3 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
              Who we're looking for
            </h3>
            <ul className="ml-5 space-y-3 list-disc xl:text-lg">
              {lookingFor.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          {/* Benefits  */}
          <div className="py-12 border-t-2 space-y-7">
            <div className="space-y-6 text-base xl:text-lg/8">
              <h3 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
                Benefits with you in mind
              </h3>
              <p>
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
            <div className="bg-[#f4f4f9] px-4 py-8 md:px-10 md:py-16 rounded-[16px]">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {benefitsData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="space-y-4 text-base/6 xl:text-lg/8"
                    >
                      <h4 className="text-[19px] font-semibold sm:text-xl xl:text-2xl text-martex-dark_text">
                        {item.title}
                      </h4>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="text-base xl:text-lg/8">
              <p>
                Sagittis augue congue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque aliquam fusce blandit
              </p>
            </div>
          </div>
          {/* hiring process */}
          <div className="py-12 space-y-6 text-base border-t-2 xl:text-lg/8">
            <h3 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
              What is our hiring process like?
            </h3>
            <p>
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien congue tempor
            </p>
            <ul className="ml-5 space-y-2 list-decimal">
              <li>Curabitur ac dapibus libero eu congue tristique neque</li>
              <li>
                Sagittis congue augue blandit velna vitae auctor egestas
                volutpat egestas
              </li>
              <li>An aliquam justo suscipit congue augue</li>
              <li>Gestas integer congue a lectus porta</li>
            </ul>
            <p>
              Integer congue sagittis augue egestas velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque diam augue fusce sapien
            </p>
            <p>
              Integer congue sagittis augue egestas velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque diam augue fusce sapien nulla a primis lacinia
              ipsum a molestie blandit and justo an aliquet eget molestie
              sagittis at quaerat sodales
            </p>
          </div>
          {/* How to apply */}
          <div className="py-12 space-y-6 text-base border-t-2 xl:text-lg/8">
            <h3 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
              How to apply
            </h3>
            <p>
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
            <p>
              Sagittis augue congue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque aliquam fusce blandit
            </p>
            <div className="w-full py-4">
              <Button className="w-full text-base xl:text-lg font-semibold rounded-[5px] py-6 xl:py-7 bg-martex-light_blue hover:bg-martex-dark_blue transition-all duration-300">
                Apply to this job!
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />

    </section>
  );
};

export default CareersRole;
