export default function PaymentInfoSection() {
  const paymentIcons = [
    {
      name: "Visa",
      img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/visa.png",
    },
    {
      name: "American Express",
      img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/am.png",
    },
    {
      name: "Discover",
      img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/discover.png",
    },
    {
      name: "PayPal",
      img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/paypal.png",
    },
    {
      name: "JCB",
      img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/jcb.png",
    },
    {
      name: "Shopify",
      img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/shopify.png",
    },
  ];

  return (
    <section className="px-2 pt-16 bg-white border-t md:px-10 xl:px-0">
      <div className="grid gap-16 mx-auto max-w-7xl md:grid-cols-3">
        {/* Accepted Payments */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-[#353f4f]">
            Accepted Payment Methods
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            {paymentIcons.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.name}
                className="object-contain h-8"
              />
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-[#353f4f]">
            Money Back Guarantee
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Explore Martex Premium for 14 days. If it’s not a perfect fit,
            receive a full refund.
          </p>
        </div>

        {/* SSL Encryption */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-[#353f4f]">
            SSL Encrypted Payment
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Your information is protected by 256-bit SSL encryption.
          </p>
        </div>
      </div>
    </section>
  );
}
