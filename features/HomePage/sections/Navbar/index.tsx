import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CloseRounded, MenuRounded, PersonRounded, LogoutRounded, AccountCircleRounded } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useAuth } from "../../../../context/AuthContext";
import { navItems } from "./constants";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

/** Returns 1–2 uppercase initials from a full name */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return "U";
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  // Defer auth-dependent rendering to client to avoid SSR/client hydration mismatch
  useEffect(() => { setMounted(true); }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href === "home") {
      if (router.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        void router.push("/");
      }
      return;
    }
    if (router.pathname === "/") {
      scrollToSection(href);
    } else {
      void router.push("/").then(() => {
        window.setTimeout(() => {
          document.getElementById(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      });
    }
  };

  // Close dropdown only when clicking outside BOTH dropdown containers
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = desktopDropdownRef.current?.contains(target);
      const insideMobile = mobileDropdownRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setDropdownOpen(false);
    setMobileOpen(false);
    logout();
    router.push("/");
  };

  const handleProfile = () => {
    setDropdownOpen(false);
    setMobileOpen(false);
    router.push("/profile");
  };

  // ── Avatar circle (desktop + mobile) ────────────────────────────────────
  const AvatarButton = ({ onClick }: { onClick: () => void }) => {
    const hasPic = !!user?.profilePic;
    return (
      <button
        onClick={onClick}
        className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/35 hover:border-white btn-transition focus:outline-none"
        aria-label="User menu"
        style={{ background: hasPic ? "transparent" : "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)" }}
      >
        {hasPic ? (
          <Image
            src={user!.profilePic}
            alt={user!.fullName || "User"}
            fill
            sizes="36px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <span className="text-white text-xs font-bold select-none">
            {getInitials(user?.fullName || user?.displayName || "User")}
          </span>
        )}
      </button>
    );
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 shadow-md shadow-slate-900/10">
        <div className="flex flex-col w-full">
          {/* Top bar: partner logos */}
          <div className="border-b border-slate-200/90 bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-evenly gap-8 px-4 py-1 sm:px-6 sm:py-1 lg:px-20">
              <Link href="/" className="flex shrink-0 items-center justify-center">
                <Image
                  src="/logo/TIRTC LOGOS.png"
                  alt="TIRTC"
                  width={110}
                  height={100}
                  className="h-[52px] w-auto sm:h-[70px] object-contain object-center"
                />
              </Link>
              <Link href="/" className="flex shrink-0 items-center justify-center">
                <Image
                  src="/logo/CII.png"
                  alt="CII"
                  width={206}
                  height={90}
                  className="h-[52px] w-auto max-w-56 sm:h-[70px] object-contain object-center"
                />
              </Link>
            </div>
          </div>

          {/* Secondary bar: nav + auth — lighter brand gradient */}
          <div className="w-full border-b border-primary-500/30 bg-gradient-to-r from-primary-700 via-primary-500 to-primary-500">
            <div className=" mx-auto flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-20 lg:py-4">
              <nav className="hidden min-w-0 flex-1 lg:flex lg:items-center lg:gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNav(item.href)}
                    className="relative px-2 py-2 text-[13px] text-white/85 hover:text-white rounded-md transition-colors duration-150 group  uppercase font-semibold"
                  >
                    {item.label}
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-white rounded-full transition-all duration-200 group-hover:w-[calc(100%-12px)]" />
                  </button>
                ))}
              </nav>

              {/* Desktop: profile / Register + Login */}
              <div className="hidden shrink-0 items-center gap-3 lg:flex">
                {mounted && isAuthenticated ? (
                  <div ref={desktopDropdownRef} className="relative">
                    <AvatarButton onClick={() => setDropdownOpen((o) => !o)} />

                    {dropdownOpen && (
                      <div
                        className="absolute right-0 top-[calc(100%+10px)] w-52 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50"
                        style={{ animation: "fadeIn 0.15s ease" }}
                      >
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-content-primary truncate">
                            {user?.fullName || user?.displayName || "User"}
                          </p>
                          <p className="text-xs text-content-secondary truncate mt-0.5">
                            {user?.email}
                          </p>
                        </div>
                        <div className="py-1">
                          <button
                            onClick={handleProfile}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-content-secondary hover:text-primary-700 hover:bg-primary-700/[0.05] btn-transition"
                          >
                            <PersonRounded style={{ fontSize: 17 }} />
                            My Profile
                          </button>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-content-secondary hover:text-red-600 hover:bg-red-50 btn-transition"
                          >
                            <LogoutRounded style={{ fontSize: 17 }} />
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      href="/register"
                      className="btn-transition px-4 py-2 text-sm font-semibold border border-white/45 text-white rounded-full hover:bg-white/10 hover:border-white/70"
                    >
                      Register
                    </Link>
                    <Link
                      href="/login"
                      className="btn-transition px-5 py-2 text-sm font-semibold bg-secondary-500 text-white rounded-full hover:bg-secondary-600 shadow-sm hover:shadow-md"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile: optional compact auth + menu */}
              <div className="flex w-full items-center justify-end gap-2 lg:hidden">
                {mounted && !isAuthenticated && (
                  <>
                    <Link
                      href="/register"
                      className="btn-transition px-3 py-1.5 text-xs font-semibold border border-white/45 text-white rounded-full hover:bg-white/10 sm:text-sm sm:px-4 sm:py-2"
                    >
                      Register
                    </Link>
                    <Link
                      href="/login"
                      className="btn-transition px-3 py-1.5 text-xs font-semibold bg-secondary-500 text-white rounded-full hover:bg-secondary-600 sm:text-sm sm:px-5 sm:py-2"
                    >
                      Login
                    </Link>
                  </>
                )}
                {mounted && isAuthenticated && (
                  <div ref={mobileDropdownRef} className="relative">
                    <AvatarButton onClick={() => setDropdownOpen((o) => !o)} />
                    {dropdownOpen && (
                      <div className="absolute right-0 top-[calc(100%+10px)] w-52 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-content-primary truncate">
                            {user?.fullName || user?.displayName || "User"}
                          </p>
                          <p className="text-xs text-content-secondary truncate mt-0.5">
                            {user?.email}
                          </p>
                        </div>
                        <div className="py-1">
                          <button
                            onClick={handleProfile}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-content-secondary hover:text-primary-700 hover:bg-primary-700/[0.05] btn-transition"
                          >
                            <PersonRounded style={{ fontSize: 17 }} />
                            My Profile
                          </button>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-content-secondary hover:text-red-600 hover:bg-red-50 btn-transition"
                          >
                            <LogoutRounded style={{ fontSize: 17 }} />
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <button
                  className="p-2 -mr-1 text-white/90 hover:text-white rounded-lg hover:bg-white/10 btn-transition"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <MenuRounded />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 flex h-full w-72 flex-col border-l border-slate-200/90 bg-gradient-to-b from-background-primary via-background-secondary to-background-muted text-content-primary shadow-[0_0_40px_rgba(15,23,42,0.08)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200/80 px-4 py-4 sm:px-5">
              <div className="flex min-w-0 flex-1 items-center justify-evenly gap-4">
                <Link href="/" className="flex shrink-0 items-center justify-center" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/logo/TIRTC LOGOS.png"
                    alt="TIRTC"
                    width={100}
                    height={40}
                    className="h-10 w-auto object-contain object-center"
                  />
                </Link>
                <Link href="/" className="flex shrink-0 items-center justify-center" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/logo/CII.png"
                    alt="CII"
                    width={180}
                    height={78}
                    className="h-10 w-auto max-w-[40vw] object-contain object-center sm:max-w-[11rem]"
                  />
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="shrink-0 p-1 text-content-secondary hover:text-content-primary"
                aria-label="Close menu"
              >
                <CloseRounded />
              </button>
            </div>

            {/* Logged-in user strip inside drawer */}
            {mounted && isAuthenticated && (
              <div className="flex items-center gap-3 border-b border-slate-200/80 bg-background-muted/70 px-5 py-3">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary-500/30"
                  style={user?.profilePic ? {} : { background: "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)" }}
                >
                  {user?.profilePic ? (
                    <Image src={user.profilePic} alt={user.fullName || "User"} width={36} height={36} style={{ objectFit: "cover" }} />
                  ) : (
                    <span className="text-white text-xs font-bold">
                      {getInitials(user?.fullName || user?.displayName || "U")}
                    </span>
                  )}
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-semibold text-content-primary">
                    {user?.fullName || user?.displayName || "User"}
                  </span>
                  <span className="truncate text-xs text-content-secondary">{user?.email}</span>
                </div>
              </div>
            )}

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="nav-link rounded-lg px-4 py-3 text-left text-sm text-content-primary/90 hover:bg-background-muted hover:text-primary-700"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-3 border-t border-slate-200/80 p-4">
              {mounted && isAuthenticated ? (
                <>
                  <button
                    onClick={handleProfile}
                    className="btn-transition flex items-center justify-center gap-2 rounded-full border border-primary-500/35 py-2.5 text-sm font-semibold text-primary-700 hover:bg-background-muted"
                  >
                    <AccountCircleRounded style={{ fontSize: 18 }} />
                    My Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="btn-transition flex items-center justify-center gap-2 rounded-full bg-red-50 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100"
                  >
                    <LogoutRounded style={{ fontSize: 18 }} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="btn-transition rounded-full border border-primary-500/35 py-2.5 text-center text-sm font-semibold text-primary-700 hover:bg-background-muted"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="btn-transition rounded-full bg-secondary-500 py-2.5 text-center text-sm font-semibold text-white hover:bg-secondary-600"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
