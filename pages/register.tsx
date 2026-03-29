import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { VisibilityRounded, VisibilityOffRounded } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import { redirectAfterAuth } from "../utils/authRedirect";

type RegisterForm = {
  fullName: string;
  email: string;
  contactNumber: string;
  password: string;
  confirmPassword: string;
};

const initial: RegisterForm = {
  fullName: "",
  email: "",
  contactNumber: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const router = useRouter();
  const { registerUser, isAuthenticated, isAuthReady, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState<RegisterForm>(initial);
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});

  useEffect(() => {
    if (!isAuthReady || !isAuthenticated) return;
    redirectAfterAuth(router);
  }, [isAuthenticated, isAuthReady, router]);

  const validate = () => {
    const e: Partial<RegisterForm> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.contactNumber.trim()) e.contactNumber = "Contact number is required";
    else if (!/^\d{10,13}$/.test(form.contactNumber.replace(/\s/g, "")))
      e.contactNumber = "Enter a valid 10–13 digit number";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Minimum 6 characters";
    if (!form.confirmPassword) e.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    registerUser(
      {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        contactNumber: form.contactNumber.trim(),
        password: form.password,
      },
      () => redirectAfterAuth(router)
    );
  };

  const field = (
    id: keyof RegisterForm,
    label: string,
    type = "text",
    placeholder = "",
    autoComplete = "",
    extra?: React.ReactNode
  ) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-content-primary" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={form[id]}
          onChange={(e) => {
            setForm((f) => ({ ...f, [id]: e.target.value }));
            setErrors((er) => ({ ...er, [id]: undefined }));
          }}
          className="w-full px-4 py-2.5 rounded-xl border text-sm text-content-primary outline-none transition-all duration-150 bg-white"
          style={{
            borderColor: errors[id] ? "#ef4444" : "rgba(29,78,216,0.2)",
            boxShadow: errors[id] ? "0 0 0 3px rgba(239,68,68,0.10)" : "none",
            paddingRight: extra ? "2.75rem" : undefined,
          }}
          onFocus={(ev) => {
            if (!errors[id]) {
              ev.currentTarget.style.borderColor = "#1D4ED8";
              ev.currentTarget.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.10)";
            }
          }}
          onBlur={(ev) => {
            if (!errors[id]) {
              ev.currentTarget.style.borderColor = "rgba(29,78,216,0.2)";
              ev.currentTarget.style.boxShadow = "none";
            }
          }}
        />
        {extra && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">{extra}</span>
        )}
      </div>
      {errors[id] && <p className="text-xs text-red-500">{errors[id]}</p>}
    </div>
  );

  const eyeBtn = (show: boolean, toggle: () => void) => (
    <button
      type="button"
      onClick={toggle}
      className="text-content-secondary hover:text-primary-700 btn-transition"
      tabIndex={-1}
    >
      {show
        ? <VisibilityOffRounded style={{ fontSize: 18 }} />
        : <VisibilityRounded style={{ fontSize: 18 }} />}
    </button>
  );

  return (
    <>
      <Head>
        <title>Register | TIRTC Portal</title>
        <meta name="description" content="Create your TIRTC portal account." />
      </Head>

      <div
        className="min-h-screen flex flex-col"
        style={{
          background: [
            "radial-gradient(circle at 15% 25%, rgba(29,78,216,0.08), transparent 40%)",
            "radial-gradient(circle at 85% 75%, rgba(6,182,212,0.06), transparent 40%)",
            "linear-gradient(160deg, #f1f5ff 0%, #e6f6ff 100%)",
          ].join(", "),
        }}
      >
        {/* Top bar */}
        <header className="px-6 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/TIRTC LOGOS.png"
              alt="TIRTC"
              width={88}
              height={40}
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </Link>
        </header>

        {/* Form card */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(29,78,216,0.10)] border border-primary-700/[0.07] px-8 py-10">

              {/* Heading */}
              <div className="flex flex-col gap-1.5 mb-8">
                <h1 className="text-2xl font-bold text-content-primary font-poppins">Create account</h1>
                <p className="text-sm text-content-secondary">Join the TIRTC portal to explore courses and opportunities</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {field("fullName", "Full name", "text", "John Doe", "name")}
                {field("email", "Email address", "email", "you@example.com", "email")}
                {field("contactNumber", "Contact number", "tel", "9876543210", "tel")}

                {/* Password with eye toggle */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-content-primary" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Min. 6 characters"
                      value={form.password}
                      onChange={(e) => { setForm((f) => ({ ...f, password: e.target.value })); setErrors((er) => ({ ...er, password: undefined })); }}
                      className="w-full px-4 py-2.5 pr-11 rounded-xl border text-sm text-content-primary outline-none transition-all duration-150 bg-white"
                      style={{ borderColor: errors.password ? "#ef4444" : "rgba(29,78,216,0.2)", boxShadow: errors.password ? "0 0 0 3px rgba(239,68,68,0.10)" : "none" }}
                      onFocus={(ev) => { if (!errors.password) { ev.currentTarget.style.borderColor = "#1D4ED8"; ev.currentTarget.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.10)"; } }}
                      onBlur={(ev) => { if (!errors.password) { ev.currentTarget.style.borderColor = "rgba(29,78,216,0.2)"; ev.currentTarget.style.boxShadow = "none"; } }}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">{eyeBtn(showPassword, () => setShowPassword((v) => !v))}</span>
                  </div>
                  {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                </div>

                {/* Confirm password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-content-primary" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Re-enter password"
                      value={form.confirmPassword}
                      onChange={(e) => { setForm((f) => ({ ...f, confirmPassword: e.target.value })); setErrors((er) => ({ ...er, confirmPassword: undefined })); }}
                      className="w-full px-4 py-2.5 pr-11 rounded-xl border text-sm text-content-primary outline-none transition-all duration-150 bg-white"
                      style={{ borderColor: errors.confirmPassword ? "#ef4444" : "rgba(29,78,216,0.2)", boxShadow: errors.confirmPassword ? "0 0 0 3px rgba(239,68,68,0.10)" : "none" }}
                      onFocus={(ev) => { if (!errors.confirmPassword) { ev.currentTarget.style.borderColor = "#1D4ED8"; ev.currentTarget.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.10)"; } }}
                      onBlur={(ev) => { if (!errors.confirmPassword) { ev.currentTarget.style.borderColor = "rgba(29,78,216,0.2)"; ev.currentTarget.style.boxShadow = "none"; } }}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">{eyeBtn(showConfirm, () => setShowConfirm((v) => !v))}</span>
                  </div>
                  {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl text-sm font-bold text-white btn-transition shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  style={{ background: "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)" }}
                >
                  {isLoading ? "Creating account…" : "Create account"}
                </button>
              </form>

              {/* Footer link */}
              <p className="text-center text-sm text-content-secondary mt-6">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-primary-700 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <p className="text-center text-xs text-content-secondary mt-6">
              <Link href="/" className="hover:text-primary-700 transition-colors">
                ← Back to home
              </Link>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
