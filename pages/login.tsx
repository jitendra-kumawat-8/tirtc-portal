import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { VisibilityRounded, VisibilityOffRounded } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import { redirectAfterAuth } from "../utils/authRedirect";

export default function LoginPage() {
  const router = useRouter();
  const { loginUser, isAuthenticated, isAuthReady, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ userName: "", password: "", rememberMe: false });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  // Redirect if already logged in (preserve return-to-card when resuming interest flow)
  useEffect(() => {
    if (!isAuthReady || !isAuthenticated) return;
    redirectAfterAuth(router);
  }, [isAuthenticated, isAuthReady, router]);

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.userName.trim()) e.userName = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.userName)) e.userName = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    loginUser(
      { userName: form.userName, password: form.password, rememberMe: form.rememberMe },
      () => redirectAfterAuth(router)
    );
  };

  return (
    <>
      <Head>
        <title>Login | TIRTC Portal</title>
        <meta name="description" content="Log in to your TIRTC account." />
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
        {/* Top bar — partner logos (aligned with site navbar) */}
        <header className="flex items-center justify-evenly gap-8 px-4 py-4 sm:gap-12 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center justify-center">
            <Image
              src="/logo/TIRTC LOGOS.png"
              alt="TIRTC"
              width={110}
              height={100}
              className="h-11 w-auto object-contain object-center sm:h-14"
            />
          </Link>
          <Link href="/" className="flex shrink-0 items-center justify-center">
            <Image
              src="/logo/CII.png"
              alt="CII"
              width={206}
              height={90}
              className="h-11 w-auto max-w-[13rem] object-contain object-center sm:h-14 sm:max-w-none"
            />
          </Link>
        </header>

        {/* Form card */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(29,78,216,0.10)] border border-primary-700/[0.07] px-8 py-10">

              {/* Heading */}
              <div className="flex flex-col gap-1.5 mb-8">
                <h1 className="text-2xl font-bold text-content-primary font-poppins">Welcome back</h1>
                <p className="text-sm text-content-secondary">Sign in to your TIRTC portal account</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-content-primary" htmlFor="userName">
                    Email address
                  </label>
                  <input
                    id="userName"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.userName}
                    onChange={(e) => setForm((f) => ({ ...f, userName: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border text-sm text-content-primary outline-none transition-all duration-150 bg-white"
                    style={{
                      borderColor: errors.userName ? "#ef4444" : "rgba(29,78,216,0.2)",
                      boxShadow: errors.userName ? "0 0 0 3px rgba(239,68,68,0.10)" : "none",
                    }}
                    onFocus={(e) => { if (!errors.userName) e.currentTarget.style.borderColor = "#1D4ED8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.10)"; }}
                    onBlur={(e) => { if (!errors.userName) { e.currentTarget.style.borderColor = "rgba(29,78,216,0.2)"; e.currentTarget.style.boxShadow = "none"; } }}
                  />
                  {errors.userName && <p className="text-xs text-red-500">{errors.userName}</p>}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-content-primary" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      value={form.password}
                      onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                      className="w-full px-4 py-2.5 pr-11 rounded-xl border text-sm text-content-primary outline-none transition-all duration-150 bg-white"
                      style={{
                        borderColor: errors.password ? "#ef4444" : "rgba(29,78,216,0.2)",
                        boxShadow: errors.password ? "0 0 0 3px rgba(239,68,68,0.10)" : "none",
                      }}
                      onFocus={(e) => { if (!errors.password) e.currentTarget.style.borderColor = "#1D4ED8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.10)"; }}
                      onBlur={(e) => { if (!errors.password) { e.currentTarget.style.borderColor = "rgba(29,78,216,0.2)"; e.currentTarget.style.boxShadow = "none"; } }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-content-secondary hover:text-primary-700 btn-transition"
                      tabIndex={-1}
                    >
                      {showPassword
                        ? <VisibilityOffRounded style={{ fontSize: 18 }} />
                        : <VisibilityRounded style={{ fontSize: 18 }} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                </div>

                {/* Remember me */}
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.rememberMe}
                    onChange={(e) => setForm((f) => ({ ...f, rememberMe: e.target.checked }))}
                    className="w-4 h-4 rounded accent-primary-700 cursor-pointer"
                  />
                  <span className="text-sm text-content-secondary">Remember me</span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl text-sm font-bold text-white btn-transition shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)" }}
                >
                  {isLoading ? "Signing in…" : "Sign in"}
                </button>
              </form>

              {/* Footer link */}
              <p className="text-center text-sm text-content-secondary mt-6">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="font-semibold text-primary-700 hover:underline">
                  Register
                </Link>
              </p>
            </div>

            {/* Back to home */}
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
