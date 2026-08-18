"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Car, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-900"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Car size={20} />
          </div>

          <span>WYM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/cars"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Cars
          </Link>

          <Link
            href="/agencies"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Agencies
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            <User size={17} />
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              href="/cars"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cars
            </Link>

            <Link
              href="/agencies"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Agencies
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Link>

            <div className="mt-3 flex flex-col gap-2 border-t pt-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}