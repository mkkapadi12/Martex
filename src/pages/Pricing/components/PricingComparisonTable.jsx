import { Check, X } from "lucide-react";
import PaymentInfoSection from "./PaymentInfoSection";

const plans = ["Starter", "Basic", "Premium"];

const pricingTableData = [
  {
    feature: "Available Projects",
    Starter: "Up to 2",
    Basic: "Up to 250",
    Premium: "Unlimited",
  },
  {
    feature: "Available Storage",
    Starter: "2GB",
    Basic: "50GB",
    Premium: "350GB",
  },
  {
    feature: "Private Cloud Hosting",
    Starter: false,
    Basic: false,
    Premium: true,
  },
  {
    feature: "User Permissions",
    Starter: true,
    Basic: true,
    Premium: true,
  },
  {
    feature: "Direct Integrations",
    Starter: true,
    Basic: true,
    Premium: true,
  },
  {
    feature: "Reusable Components",
    Starter: false,
    Basic: true,
    Premium: true,
  },
  {
    feature: "Data Backup",
    Starter: "Weekly",
    Basic: "Daily",
    Premium: "Daily",
  },
  {
    feature: "No Ads. No Trackers",
    Starter: false,
    Basic: true,
    Premium: true,
  },
  {
    feature: "Advanced Security",
    Starter: false,
    Basic: true,
    Premium: true,
  },
  {
    feature: "Shared Team Workspace",
    Starter: false,
    Basic: true,
    Premium: true,
  },
  {
    feature: "Team Management",
    Starter: false,
    Basic: false,
    Premium: true,
  },
  {
    feature: "Customer Support",
    Starter: "Limited",
    Basic: "Basic",
    Premium: "Priority",
  },
];

export default function PricingComparisonTable() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-[1280px] mx-auto overflow-x-auto">
        <div className="py-4 text-center">
          <h1 className="my-6 text-3xl md:text-5xl xl:text-6xl text-[#353f4f] font-bold">
            Compare Our Plans
          </h1>
          <p className="text-[#6c757d] text-lg md:text-xl xl:text-2xl flex justify-center items-center mx-auto w-fit">
            Complete list of features available in our pricing plans
          </p>
        </div>
        <div className="px-4 xl:px-0 md:px-16 sm:px-8">
          <table className="w-full min-w-[700px] border-collapse mt-6">
            {/* Header */}
            <thead>
              <tr className="border-b">
                <th className="py-4 font-medium text-left text-gray-500">
                  &nbsp;
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className="py-4 text-2xl font-medium text-center text-[#212529]"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {pricingTableData.map((row, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4 font-medium text-[#212529] text-xl">
                    {row.feature}
                  </td>

                  {plans.map((plan) => (
                    <td key={plan} className="py-4 text-center">
                      {typeof row[plan] === "boolean" ? (
                        row[plan] ? (
                          <Check className="mx-auto text-blue-600" size={20} />
                        ) : (
                          <X className="mx-auto text-gray-500" size={20} />
                        )
                      ) : (
                        <span className="text-[#212529] text-xl">
                          {row[plan]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PaymentInfoSection />
      </div>
    </section>
  );
}
