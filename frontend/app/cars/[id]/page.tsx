import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Fuel,
  MapPin,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

import { cars } from "@/lib/cars";

interface CarDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CarDetailsPage({
  params,
}: CarDetailsPageProps) {
  const { id } = await params;

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  // If car doesn't exist
  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Back */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/cars"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to cars
        </Link>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">

          {/* Left */}
          <div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl bg-gray-200">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="h-[400px] w-full object-cover sm:h-[500px]"
              />
            </div>

            {/* Car info */}
            <div className="mt-8">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <p className="text-sm font-medium text-blue-600">
                    {car.brand}
                  </p>

                  <h1 className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
                    {car.model}
                  </h1>

                  <p className="mt-2 text-gray-500">
                    {car.year}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-3xl font-bold text-gray-900">
                    {car.pricePerDay} TND
                  </p>

                  <p className="text-sm text-gray-500">
                    per day
                  </p>
                </div>

              </div>

              {/* Specifications */}
              <div className="mt-8">

                <h2 className="text-xl font-bold text-gray-900">
                  Vehicle specifications
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">

                  <div className="rounded-xl border bg-white p-4">
                    <Settings
                      size={20}
                      className="text-blue-600"
                    />

                    <p className="mt-3 text-xs text-gray-500">
                      Transmission
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {car.transmission}
                    </p>
                  </div>

                  <div className="rounded-xl border bg-white p-4">
                    <Fuel
                      size={20}
                      className="text-blue-600"
                    />

                    <p className="mt-3 text-xs text-gray-500">
                      Fuel
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {car.fuel}
                    </p>
                  </div>

                  <div className="rounded-xl border bg-white p-4">
                    <Users
                      size={20}
                      className="text-blue-600"
                    />

                    <p className="mt-3 text-xs text-gray-500">
                      Seats
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {car.seats}
                    </p>
                  </div>

                  <div className="rounded-xl border bg-white p-4">
                    <MapPin
                      size={20}
                      className="text-blue-600"
                    />

                    <p className="mt-3 text-xs text-gray-500">
                      Location
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {car.location}
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right - Booking */}
          <div>

            <div className="sticky top-24 rounded-2xl border bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <ShieldCheck
                    size={21}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Available for rental
                  </p>

                  <p className="text-sm text-gray-500">
                    Instant availability check
                  </p>
                </div>

              </div>

              <div className="my-6 border-t" />

              <h2 className="text-xl font-bold text-gray-900">
                Reserve this car
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Select your rental dates to continue.
              </p>

              {/* Pick-up */}
              <div className="mt-6">

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Pick-up date
                </label>

                <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
                  <CalendarDays
                    size={19}
                    className="text-blue-600"
                  />

                  <input
                    type="date"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>

              </div>

              {/* Return */}
              <div className="mt-4">

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Return date
                </label>

                <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
                  <CalendarDays
                    size={19}
                    className="text-blue-600"
                  />

                  <input
                    type="date"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>

              </div>

              {/* Price */}
              <div className="mt-6 rounded-xl bg-gray-50 p-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Daily rate
                  </span>

                  <span className="font-medium text-gray-900">
                    {car.pricePerDay} TND
                  </span>
                </div>

                <div className="mt-3 flex justify-between border-t pt-3">
                  <span className="font-semibold text-gray-900">
                    Starting from
                  </span>

                  <span className="text-lg font-bold text-gray-900">
                    {car.pricePerDay} TND
                  </span>
                </div>

              </div>

              {/* Booking button */}
              <Link
                href={`/login?redirect=/cars/${car.id}`}
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Book Now
              </Link>

              {/* Benefits */}
              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Check
                    size={17}
                    className="text-green-600"
                  />
                  No hidden fees
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Check
                    size={17}
                    className="text-green-600"
                  />
                  Trusted rental agency
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Check
                    size={17}
                    className="text-green-600"
                  />
                  Secure reservation
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}