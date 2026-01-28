export default function Stats() {
  const stats = [
    { value: "89k", text: "Porta justo integer and velna vitae auctor" },
    { value: "76%", text: "Ligula magna suscipit vitae and rutrum" },
    { value: "4.93", text: "Sagittis congue augue egestas an egestas" },
  ];

  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        <div className="flex flex-col justify-center mx-auto sm:justify-between md:flex-row xl:max-w-[1300px]">
          {stats.map((s, i) => (
            <div key={i} className="sm:px-5 xl:px-6 flex sm:flex-row flex-col items-center justify-center gap-4 w-full max-w-full mb-8 xl:w-4/12 lg:w-4/12 md:w-4/12 flex-[0_0_auto]">
              <h3 className="text-4xl font-semibold sm:text-5xl xl:text-6xl text-martex-dark_text">
                {s.value}
              </h3>
              <p className="px-2 text-base xl:px-6 text-martex-light_text xl:text-xl">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
