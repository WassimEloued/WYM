"use client";

import Link from "next/link";
import {
  CalendarDays,
  Car,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Search,
  User,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <p className="text-sm font-medium text-blue-600">
            Customer Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your reservations and discover your next car.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Quick actions */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Link
            href="/cars"
            className="group rounded-2xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Search
                size={21}
                className="text-blue-600"
              />
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
              Find a car
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Browse available vehicles
            </p>

            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
              Browse cars
              <ChevronRight size={16} />
            </div>
          </Link>

          <Link
            href="/dashboard/reservations"
            className="group rounded-2xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <CalendarDays
                size={21}
                className="text-green-600"
              />
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
              My reservations
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View your bookings
            </p>

            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
              View reservations
              <ChevronRight size={16} />
            </div>
          </Link>

          <Link
            href="/dashboard/favorites"
            className="group rounded-2xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
              <Heart
                size={21}
                className="text-red-500"
              />
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
              Favorites
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Cars you saved
            </p>

            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
              View favorites
              <ChevronRight size={16} />
            </div>
          </Link>

          <Link
            href="/dashboard/profile"
            className="group rounded-2xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
              <User
                size={21}
                className="text-purple-600"
              />
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
              My profile
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your account
            </p>

            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
              View profile
              <ChevronRight size={16} />
            </div>
          </Link>

        </div>

        {/* Active reservation */}
        <div className="mt-8">

          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Current reservation
              </h2>

              <p className="text-sm text-gray-500">
                Your upcoming rental
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-white">

            <div className="grid lg:grid-cols-[280px_1fr]">

              {/* Car image */}
              <div className="h-56 lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
                  alt="BMW 320i"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Reservation */}
              <div className="p-6">

                <div className="flex flex-col justify-between gap-4 sm:flex-row">

                  <div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      Confirmed
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-gray-900">
                      BMW 320i
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin size={16} />
                      Tunis
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm text-gray-500">
                      Total
                    </p>

                    <p className="text-2xl font-bold text-gray-900">
                      360 TND
                    </p>
                  </div>

                </div>

                <div className="mt-6 grid gap-4 border-y py-5 sm:grid-cols-3">

                  <div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <CalendarDays size={17} />
                      <span className="text-xs">
                        Pick-up
                      </span>
                    </div>

                    <p className="mt-1 font-semibold text-gray-900">
                      25 Aug 2026
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <CalendarDays size={17} />
                      <span className="text-xs">
                        Return
                      </span>
                    </div>

                    <p className="mt-1 font-semibold text-gray-900">
                      28 Aug 2026
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={17} />
                      <span className="text-xs">
                        Duration
                      </span>
                    </div>

                    <p className="mt-1 font-semibold text-gray-900">
                      3 days
                    </p>
                  </div>

                </div>

                <div className="mt-5 flex flex-wrap gap-3">

                  <button className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600">
                    View reservation
                  </button>

                  <button className="rounded-xl border px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                    Cancel reservation
                  </button>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Recommended cars */}
        <div className="mt-10">

          <div className="flex items-end justify-between">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recommended cars
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Find your next rental
              </p>
            </div>

            <Link
              href="/cars"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all
            </Link>

          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">

            {[
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
            ].map((car) => (
              <Link
                key={car.id}
                href={`/cars/${car.id}`}
                className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="h-40 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-4">

                  <p className="text-xs text-gray-500">
                    {car.brand}
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">
                      {car.model}
                    </h3>

                    <p className="font-bold text-gray-900">
                      {car.price} TND
                    </p>
                  </div>

                  <p className="mt-1 text-xs text-gray-500">
                    per day
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>
    </main>
  );
}