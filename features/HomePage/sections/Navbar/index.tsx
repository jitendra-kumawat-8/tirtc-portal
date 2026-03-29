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
        className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-700/30 hover:border-primary-700 btn-transition focus:outline-none"
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
      <nav className="sticky top-0 z-50 bg-white/[0.94] backdrop-blur-lg border-b border-primary-900/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between h-[68px] md:h-[76px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo/TIRTC LOGOS.png"
              alt="TIRTC"
              width={96}
              height={44}
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </Link>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="relative px-2.5 py-2 text-[13px] font-medium text-content-secondary hover:text-primary-700 rounded-md transition-colors duration-150 group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-primary-700 rounded-full transition-all duration-200 group-hover:w-[calc(100%-16px)]" />
              </button>
            ))}
          </div>

          {/* CTA area — desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <div className="w-px h-5 bg-gray-200" />

            {mounted && isAuthenticated ? (
              /* ── Logged-in: avatar + dropdown ── */
              <div ref={desktopDropdownRef} className="relative">
                <AvatarButton onClick={() => setDropdownOpen((o) => !o)} />

                {dropdownOpen && (
                  <div
                    className="absolute right-0 top-[calc(100%+10px)] w-52 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50"
                    style={{ animation: "fadeIn 0.15s ease" }}
                  >
                    {/* User info strip */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-content-primary truncate">
                        {user?.fullName || user?.displayName || "User"}
                      </p>
                      <p className="text-xs text-content-secondary truncate mt-0.5">
                        {user?.email}
                      </p>
                    </div>
                    {/* Menu items */}
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
              /* ── Logged-out: Register + Login ── */
              <>
                <Link
                  href="/register"
                  className="btn-transition px-4 py-2 text-sm font-semibold border border-primary-700/70 text-primary-700 rounded-full hover:bg-primary-700/[0.06] hover:border-primary-700"
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="btn-transition px-5 py-2 text-sm font-semibold bg-primary-700 text-white rounded-full hover:bg-primary-900 shadow-sm hover:shadow-md"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile: avatar (if logged in) + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
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
              className="p-2 -mr-1 text-content-secondary hover:text-primary-700 rounded-lg hover:bg-primary-900/[0.04] btn-transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuRounded />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <Image
                src="/logo/TIRTC LOGOS.png"
                alt="TIRTC"
                width={100}
                height={40}
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
              <button onClick={() => setMobileOpen(false)} className="p-1 text-content-secondary">
                <CloseRounded />
              </button>
            </div>

            {/* Logged-in user strip inside drawer */}
            {mounted && isAuthenticated && (
              <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-primary-700/[0.04]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-primary-700/30"
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
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-content-primary truncate">
                    {user?.fullName || user?.displayName || "User"}
                  </span>
                  <span className="text-xs text-content-secondary truncate">{user?.email}</span>
                </div>
              </div>
            )}

            <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-left px-4 py-3 text-sm text-content-secondary hover:text-primary-700 hover:bg-primary-900/[0.04] rounded-lg nav-link"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-3 p-4 border-t border-gray-100">
              {mounted && isAuthenticated ? (
                <>
                  <button
                    onClick={handleProfile}
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold border border-primary-700 text-primary-700 rounded-full hover:bg-primary-700/[0.06] btn-transition"
                  >
                    <AccountCircleRounded style={{ fontSize: 18 }} />
                    My Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold bg-red-50 text-red-600 rounded-full hover:bg-red-100 btn-transition"
                  >
                    <LogoutRounded style={{ fontSize: 18 }} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="text-center py-2.5 text-sm font-semibold border border-primary-700 text-primary-700 rounded-full hover:bg-primary-700/[0.06] btn-transition"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="text-center py-2.5 text-sm font-semibold bg-primary-700 text-white rounded-full hover:bg-primary-900 btn-transition"
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
