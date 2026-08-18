import {
  ShieldCheck,
  Search,
  Wallet,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Easy to Find",
    description:
      "Search and compare cars from multiple rental agencies in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Agencies",
    description:
      "Discover reliable rental agencies and transparent vehicle information.",
  },
  {
    icon: Wallet,
    title: "Fair Prices",
    description:
      "Compare prices and find the right car for your budget.",
  },
  {
    icon: Headphones,
    title: "Simple Experience",
    description:
      "Manage your reservations through one simple platform.",
  },
];

export default function WhyWym() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Why WYM
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need for your next rental
          </h2>

          <p className="mt-4 text-gray-600">
            We make car rental simple, transparent, and convenient.
          </p>

        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}