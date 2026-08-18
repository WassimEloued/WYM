import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Ready to find your next car?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Explore available cars and find the perfect vehicle
          for your next trip.
        </p>

        <Link
          href="/cars"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Cars
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}