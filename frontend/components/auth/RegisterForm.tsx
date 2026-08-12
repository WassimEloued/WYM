"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerUser } from "@/lib/auth";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const router = useRouter();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    setServerError("");

    // Frontend validation
    if (data.name.length < 2) {
      setServerError("Name must contain at least 2 characters");
      return;
    }

    if (!data.email.includes("@")) {
      setServerError("Please enter a valid email");
      return;
    }

    if (data.password.length < 8) {
      setServerError(
        "Password must contain at least 8 characters"
      );
      return;
    }

    if (data.password !== data.confirmPassword) {
      setServerError("Passwords do not match");
      return;
    }

    try {
      await registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
        });
      router.push("/login");

    } catch (error: any) {
      setServerError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-6">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold">
          Create your account
        </h1>

        <p className="mt-2 text-gray-500">
          Create your WYM account
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >

          {/* NAME */}

          <div>
            <label
              htmlFor="name"
              className="mb-2 block"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full rounded-lg border p-3"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

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
            <label
              htmlFor="password"
              className="mb-2 block"
            >
              Password
            </label>

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

          {/* CONFIRM PASSWORD */}

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
              className="w-full rounded-lg border p-3"
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* SERVER ERROR */}

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
              ? "Creating account..."
              : "Create account"}
          </button>

        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}

          <Link
            href="/login"
            className="font-semibold underline"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}