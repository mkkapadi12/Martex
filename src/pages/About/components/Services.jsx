import {
  LineChart,
  Lightbulb,
  BarChart3,
  LayoutDashboard,
  Trophy,
  SearchCheck,
} from "lucide-react";

const services = [
  {
    title: "Market Research",
    description:
      "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    icon: LineChart,
  },
  {
    title: "User Experience",
    description:
      "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    icon: Lightbulb,
  },
  {
    title: "Digital Marketing",
    description:
      "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    icon: BarChart3,
  },
  {
    title: "Web Development",
    description:
      "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    icon: LayoutDashboard,
  },
  {
    title: "Brand Design Identity",
    description:
      "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    icon: Trophy,
  },
  {
    title: "SEO & SMM Services",
    description:
      "Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum",
    icon: SearchCheck,
  },
];

const Services = () => {
  return (
    <section className="px-4 py-16 bg-white xl:px-0 sm:px-6 md:px-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-x-16 xl:gap-y-14 md:gap-y-4 md:gap-x-4 gap-y-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-5 sm:flex-row sm: jusitify-center sm:items-start sm:justify-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                    <Icon className="text-blue-600 " size={45} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center sm:text-start">
                  <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-[#353f4f] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#6c757d] text-base/7 xl:text-lg/8">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
