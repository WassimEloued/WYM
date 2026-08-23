import Link from "next/link";
import {
  ArrowRight,
  Car,
  MapPin,
  Star,
} from "lucide-react";

import { Agency } from "@/types/agency";

interface AgencyCardProps {
  agency: Agency;
}

export default function AgencyCard({
  agency,
}: AgencyCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={agency.image}
          alt={agency.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-3">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {agency.name}
            </h2>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin size={16} />
              {agency.location}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
            <Star
              size={15}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-sm font-semibold text-gray-800">
              {agency.rating}
            </span>
          </div>

        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {agency.description}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center gap-2 border-t pt-4 text-sm text-gray-500">
          <Car size={17} />

          <span>
            {agency.carsCount} cars available
          </span>
        </div>

        {/* Button */}
        <Link
          href={`/agencies/${agency.id}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          View Agency
          <ArrowRight size={17} />
        </Link>

      </div>
    </article>
  );
}