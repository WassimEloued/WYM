import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">

        <h1 className="text-4xl font-bold">
          WYM
        </h1>

        <p className="mt-3 text-gray-500">
          Welcome to WYM
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Link
            href="/login"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg border px-5 py-3"
          >
            Register
          </Link>
        </div>

      </div>
    </main>
  );
}