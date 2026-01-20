const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    price: "$0",
    duration: "/ forever",
    description: "For professionals getting started with smaller projects.",
    buttonText: "Get started - it's free",
    note: "No credit card required",
    features: [
      { text: "2 free projects", enabled: true },
      { text: "1 GB of cloud storage", enabled: true },
      { text: "For personal use", enabled: true },
      { text: "Weekly data backup", enabled: false },
      { text: "No Ads. No trackers", enabled: false },
      { text: "12/5 email support", enabled: true },
    ],
  },
  {
    id: 2,
    title: "Basic",
    price: "$16.99",
    duration: "/ mo",
    description: "For personal use or small teams with simple workflows.",
    buttonText: "Start 14-day trial",
    note: "7-Day Money Back Guarantee",
    features: [
      { text: "Up to 250 projects", enabled: true },
      { text: "15 GB of Cloud Storage", enabled: true },
      { text: "Shared team workspace", enabled: true },
      { text: "Daily data backup", enabled: true },
      { text: "No Ads. No trackers", enabled: true },
      { text: "12/7 email support", enabled: true },
    ],
  },
  {
    id: 3,
    title: "Advanced",
    price: "$24.99",
    duration: "/ mo",
    description: "For growing teams that need more services and flexibility.",
    buttonText: "Upgrade your plan",
    note: "7-Day Money Back Guarantee",
    features: [
      { text: "Everything in Basic", enabled: true },
      { text: "Private cloud hosting", enabled: true },
      { text: "Custom security", enabled: true },
      { text: "Advanced user permissions", enabled: true },
      { text: "Multi-team management", enabled: true },
      { text: "24/7 Email Support", enabled: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="px-0 pt-10 sm:pt-20">
      <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col p-6 bg-white shadow-lg sm:p-8 rounded-2xl"
          >
            {/* Title */}
            <h3 className="text-3xl font-bold text-martex-dark_text">
              {plan.title}
            </h3>

            {/* Price */}
            <div className="flex items-end gap-2 mt-4">
              <span className="text-5xl font-bold text-martex-dark_text">
                {plan.price}
              </span>
              <span className="text-xl text-martex-light_text">
                {plan.duration}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-martex-light_text">{plan.description}</p>

            {/* Button */}
            <button
              className={`mt-6 text-white font-semibold py-3 rounded-lg transition-all duration-500 bg-[#1680fb] hover:bg-[#185abd]`}
            >
              {plan.buttonText}
            </button>

            {/* Note */}
            <p className="mt-3 text-base text-center text-martex-light_text">
              {plan.note}
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 font-medium text-lg ${
                    feature.enabled ? "text-martex-dark_text" : "text-gray-400"
                  }`}
                >
                  <span>{feature.enabled ? "✓" : "✓"}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
