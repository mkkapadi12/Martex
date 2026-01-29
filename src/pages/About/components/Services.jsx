const Services = ({ services }) => {
  return (
    <div className="px-4 py-16 bg-white xl:px-0 sm:px-6 md:px-3">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-x-16 xl:gap-y-14 md:gap-y-4 md:gap-x-4 gap-y-7">
          {services?.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-5 sm:flex-row sm: jusitify-center sm:items-start sm:justify-start"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                    <Icon className="text-blue-600 " size={45} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center sm:text-start">
                  <h3 className="mb-2 text-xl font-semibold xl:text-2xl text-martex-dark_text">
                    {service.title}
                  </h3>
                  <p className="text-martex-light_text text-base/7 xl:text-lg/8">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
