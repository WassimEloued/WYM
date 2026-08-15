"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerUser } from "@/lib/auth";

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  role: "customer" | "agency";
};

export default function RegisterForm() {
  const router = useRouter();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormData>({
    defaultValues: {
      role: "customer",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: RegisterFormData) => {
    setServerError("");

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
        email: data.email,
        password: data.password,
        role: (data.role ? data.role.toLowerCase() : "customer") as "customer"
      });

      router.push("/login");
    } catch (error: any) {
      console.log("REGISTER ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("RESPONSE:", error.response?.data);
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

          {/* ROLE */}

          <div>
            <label className="mb-2 block">
              Account type
            </label>

            <div className="grid grid-cols-2 gap-2 rounded-lg border p-1">

              <button
                type="button"
                onClick={() =>
                  setValue("role", "customer")
                }
                className={`rounded-md p-3 text-sm font-medium transition ${selectedRole === "customer"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                customer
              </button>

              <button
                type="button"
                onClick={() =>
                  setValue("role", "agency")
                }
                className={`rounded-md p-3 text-sm font-medium transition ${selectedRole === "agency"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                agency
              </button>

            </div>

            {/* Hidden react-hook-form field */}
            <input
              type="hidden"
              {...register("role", {
                required: "Please select an account type",
              })}
            />

            {errors.role && (
              <p className="mt-1 text-sm text-red-500">
                {errors.role.message}
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