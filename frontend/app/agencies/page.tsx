"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  MapPin,
  Search,
} from "lucide-react";

import { agencies } from "@/lib/agencies";
import AgencyCard from "@/components/agencies/AgencyCard";

export default function AgenciesPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredAgencies = useMemo(() => {
    return agencies.filter((agency) => {
      const matchesSearch =
        agency.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        agency.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesLocation =
        !location ||
        agency.location === location;

      return matchesSearch && matchesLocation;
    });
  }, [search, location]);

  const resetFilters = () => {
    setSearch("");
    setLocation("");
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gray-950 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
            <Building2
              size={28}
              className="text-white"
            />
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-blue-500">
            Trusted partners
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Find a rental agency
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Discover trusted car rental agencies and find
            the right vehicle for your journey.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Search / Filters */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm">

          <div className="grid gap-4 md:grid-cols-[1fr_220px_auto]">

            {/* Search */}
            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search agencies..."
                className="w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            {/* Location */}
            <div className="relative">

              <MapPin
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                className="w-full appearance-none rounded-xl border bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
              >
                <option value="">
                  All locations
                </option>

                <option value="Tunis">
                  Tunis
                </option>

                <option value="Sousse">
                  Sousse
                </option>

                <option value="Hammamet">
                  Hammamet
                </option>
              </select>

            </div>

            {/* Reset */}
            <button
              onClick={resetFilters}
              className="rounded-xl border px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Reset
            </button>

          </div>

        </div>

        {/* Results */}
        <div className="mt-8">

          <div className="mb-6 flex items-end justify-between">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Rental agencies
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {filteredAgencies.length}{" "}
                {filteredAgencies.length === 1
                  ? "agency"
                  : "agencies"}{" "}
                found
              </p>
            </div>

          </div>

          {filteredAgencies.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAgencies.map((agency) => (
                <AgencyCard
                  key={agency.id}
                  agency={agency}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border bg-white px-6 py-16 text-center">

              <Building2
                size={40}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No agencies found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or location.
              </p>

              <button
                onClick={resetFilters}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Reset filters
              </button>

            </div>
          )}

        </div>

      </section>
    </main>
  );
}