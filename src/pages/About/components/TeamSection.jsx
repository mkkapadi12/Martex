import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const teamMembers = [
    {
      id: 1,
      name: "Jonathan Barnes",
      role: "Founder and CEO",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-1.jpg",
    },
    {
      id: 2,
      name: "Jaime Fletcher",
      role: "Software Engineer",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-2.jpg"
    },
    {
      id: 3,
      name: "Les Bakker",
      role: "Software Engineer",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-3.jpg"
    },
    {
      id: 4,
      name: "Alyssa Garrison",
      role: "Web Development",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-4.jpg"
    },
    {
      id: 5,
      name: "Charlotte Johnson",
      role: "UI Designer",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-5.jpg"
    },
    {
      id: 6,
      name: "Olivia Steiner",
      role: "Product Manager",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-6.jpg"
    },
    {
      id: 7,
      name: "Charles Fairless",
      role: "Backend Developer",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-7.jpg"
    },
    {
      id: 8,
      name: "Monica Rivera",
      role: "Marketing Lead",
      img: "https://martex-tailwindcss.ibthemespro.com/images/team-8.jpg"
    },
  ];
  
  export default function TeamSection() {
    return (
      <section className="py-20 bg-white xl:px-0 md:px-12">
        <div className="mx-auto max-w-[1300px]">
        <div className="mb-10">
            <h1 className="font-semibold sm:leading-relaxed text-center text-3xl md:text-5xl xl:text-6xl text-[#353f4f]">
              All we do is dream and craft <br className="hidden sm:block"/> amazing products
            </h1>
            <p className="font-medium text-[#6c757d] text-center text-lg md:text-xl xl:text-2xl mt-4">Ligula risus auctor tempus magna feugiat lacinia.</p>
          </div>
          
          {/* Grid */}
          <div className="grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden transition bg-white rounded-2xl"
              >
                {/* Image */}
                <div className="aspect-[4/5] bg-gray-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="object-cover w-full h-full transition-all duration-300 rounded-xl hover:scale-105"
                  />
                </div>
  
                {/* Info */}
                <div className="p-4">
                  <h3 className="text-xl xl:text-2xl font-semibold text-[#353f4f]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-base xl:text-xl text-[#6c757d]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">

          <Link to="/careers" className="">
  <Button className="w-auto py-5 xl:py-6 text-base xl:text-lg text-[#353f4f] md:px-7 xl:px-9 hover:text-white bg-transparent hover:bg-[#1680fb] hover:border-[#1680fb] transition-all duration-500 shadow-none border-[#353f4f] font-semibold border-2">Join our Team</Button>
          </Link>
          </div>
        </div>
      </section>
    );
  }
  