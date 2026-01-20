export default function Stats() {
  const stats = [
    { value: "89k", text: "Porta justo integer and velna vitae auctor" },
    { value: "76%", text: "Ligula magna suscipit vitae and rutrum" },
    { value: "4.93", text: "Sagittis congue augue egestas an egestas" },
  ];

  return (
    <section className="py-16">
      <div className="flex flex-col justify-center px-6 mx-auto sm:justify-between max-w-7xl md:flex-row">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center justify-center mb-8">
            <h3 className="text-4xl sm:text-6xl font-semibold text-martex-dark_text">
              {s.value}
            </h3>
            <p className="text-martex-light_text text-lg sm:text-xl px-6">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
