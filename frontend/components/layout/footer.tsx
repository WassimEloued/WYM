import Link from "next/link";
import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                <Car size={20} />
              </div>

              WYM
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              WYM is a car rental platform that connects customers
              with trusted rental agencies and helps agencies manage
              their vehicles and reservations.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-lg border border-gray-800 px-3 py-2 text-sm transition hover:bg-gray-800"
              >
                Facebook
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="rounded-lg border border-gray-800 px-3 py-2 text-sm transition hover:bg-gray-800"
              >
                Instagram
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-lg border border-gray-800 px-3 py-2 text-sm transition hover:bg-gray-800"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white">
              Platform
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/cars"
                  className="transition hover:text-white"
                >
                  Browse Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/agencies"
                  className="transition hover:text-white"
                >
                  Agencies
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="transition hover:text-white"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="transition hover:text-white"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 WYM. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="#"
              className="hover:text-gray-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-gray-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}