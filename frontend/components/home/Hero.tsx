import Link from "next/link";
import {
  Search,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        {/* Hero content */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-gray-300">
            🚗 The smarter way to rent a car
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Find the perfect car for your{" "}
            <span className="text-blue-500">
              next journey
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Discover cars from trusted rental agencies,
            compare prices, and book your next ride easily
            with WYM.
          </p>
        </div>

        {/* Search box */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl bg-white p-4 shadow-2xl">

          <div className="grid gap-3 md:grid-cols-4">

            {/* Location */}
            <div className="flex items-center gap-3 rounded-xl border bg-gray-50 px-4 py-3">
              <MapPin
                size={20}
                className="shrink-0 text-blue-600"
              />

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Location
                </p>

                <input
                  type="text"
                  placeholder="Where?"
                  className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                />
              </div>
            </div>

            {/* Pickup */}
            <div className="flex items-center gap-3 rounded-xl border bg-gray-50 px-4 py-3">
              <CalendarDays
                size={20}
                className="shrink-0 text-blue-600"
              />

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Pick-up
                </p>

                <input
                  type="date"
                  className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                />
              </div>
            </div>

            {/* Return */}
            <div className="flex items-center gap-3 rounded-xl border bg-gray-50 px-4 py-3">
              <CalendarDays
                size={20}
                className="shrink-0 text-blue-600"
              />

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Return
                </p>

                <input
                  type="date"
                  className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                />
              </div>
            </div>

            {/* Search */}
            <Link
              href="/cars"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Search size={20} />
              Search Cars
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Browse all available cars
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}