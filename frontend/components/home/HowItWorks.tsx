const steps = [
  {
    number: "01",
    title: "Search",
    description:
      "Choose your location and rental dates to find available cars.",
  },
  {
    number: "02",
    title: "Compare",
    description:
      "Compare cars, prices, features, and rental agencies.",
  },
  {
    number: "03",
    title: "Book",
    description:
      "Choose your car and make your reservation easily.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            How it works
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Rent a car in three simple steps
          </h2>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border bg-gray-50 p-8"
            >
              <span className="text-5xl font-bold text-blue-100">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}