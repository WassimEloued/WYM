import Link from "next/link";
import { ArrowRight, Fuel, Users, Settings } from "lucide-react";

const cars = [
  {
    id: 1,
    brand: "BMW",
    model: "320i",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e",
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "C-Class",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
  },
  {
    id: 3,
    brand: "Audi",
    model: "A4",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
  },
];

export default function FeaturedCars() {
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

          {cars.map((car) => (
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

                <div className="flex items-start justify-between">

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
                      {car.price} TND
                    </p>

                    <p className="text-xs text-gray-500">
                      per day
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-5 flex items-center gap-4 border-t pt-4 text-sm text-gray-500">

                  <span className="flex items-center gap-1.5">
                    <Settings size={16} />
                    Auto
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Fuel size={16} />
                    Petrol
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={16} />
                    5
                  </span>

                </div>

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