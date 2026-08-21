import Link from "next/link";
import { ArrowRight, Fuel, Users, Settings } from "lucide-react";

import { cars } from "@/lib/cars";

export default function FeaturedCars() {
  // Only show the first 3 cars on the homepage
  const featuredCars = cars.slice(0, 6);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our selection
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured cars
            </h2>

            <p className="mt-3 max-w-xl text-gray-600">
              Explore some of the most popular cars available
              from our rental agencies.
            </p>
          </div>

          <Link
            href="/cars"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            View all cars
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Cars */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Image */}
              <div className="h-52 overflow-hidden bg-gray-100">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-sm text-gray-500">
                      {car.brand}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900">
                      {car.model}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">
                      {car.pricePerDay} TND
                    </p>

                    <p className="text-xs text-gray-500">
                      per day
                    </p>
                  </div>

                </div>

                {/* Location */}
                <p className="mt-2 text-sm text-gray-500">
                  📍 {car.location}
                </p>

                {/* Features */}
                <div className="mt-5 flex items-center gap-4 border-t pt-4 text-sm text-gray-500">

                  <span className="flex items-center gap-1.5">
                    <Settings size={16} />
                    {car.transmission}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Fuel size={16} />
                    {car.fuel}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={16} />
                    {car.seats}
                  </span>

                </div>

                {/* Details */}
                <Link
                  href={`/cars/${car.id}`}
                  className="mt-5 block rounded-xl bg-gray-900 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}