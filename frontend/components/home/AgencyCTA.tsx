import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function AgencyCTA() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-blue-600">

          <div className="px-6 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">

            <div className="max-w-2xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Building2 size={24} />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Are you a car rental agency?
              </h2>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                Join WYM and manage your fleet, reservations,
                customers, and business from one platform.
              </p>

            </div>

            <Link
              href="/register?role=agency"
              className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100 lg:mt-0"
            >
              Join as an Agency
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}