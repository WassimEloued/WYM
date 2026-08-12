"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { loginUser } from "@/lib/auth";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setServerError("");

    if (!data.email.includes("@")) {
      setServerError("Please enter a valid email");
      return;
    }

    if (!data.password) {
      setServerError("Password is required");
      return;
    }

    try {
      const result = await loginUser(data);

      console.log("Login successful:", result);

      /*
       * DON'T store the token yet.
       *
       * First confirm with your friend whether
       * Spring Boot uses:
       *
       * 1. JWT returned in JSON
       * 2. HttpOnly cookie
       */

      router.push("/dashboard");

    } catch (error: any) {
      setServerError(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-6">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold">
          Welcome back
        </h1>

        <p className="mt-2 text-gray-500">
          Login to your WYM account
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >

          {/* EMAIL */}

          <div>
            <label
              htmlFor="email"
              className="mb-2 block"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-lg border p-3"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}

          <div>
            <div className="mb-2 flex justify-between">

              <label htmlFor="password">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm underline"
              >
                Forgot password?
              </Link>

            </div>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full rounded-lg border p-3"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* ERROR */}

          {serverError && (
            <p className="text-sm text-red-500">
              {serverError}
            </p>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-black p-3 text-white disabled:opacity-50"
          >
            {isSubmitting
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-semibold underline"
          >
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}