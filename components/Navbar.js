import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <HomeIcon className="w-6 h-6 mr-2" /> },
    { href: "/about", label: "About", icon: <UserIcon className="w-6 h-6 mr-2" /> },
    { href: "/projects", label: "Projects", icon: <BriefcaseIcon className="w-6 h-6 mr-2" /> },
    { href: "/contact", label: "Contact", icon: <EnvelopeIcon className="w-6 h-6 mr-2" /> },
    { href: "/resume", label: "Resume", icon: <DocumentTextIcon className="w-6 h-6 mr-2" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-extrabold text-2xl bg-gradient-to-r from-blue-700 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent tracking-tight select-none"
            aria-label="Hariom Bangali Home"
          >
            Hariom&nbsp;Bangali
          </Link>

          {/* Desktop Menu */}
          <nav
            className="hidden md:block"
            aria-label="Main Navigation"
          >
            <ul className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group px-3 py-2 rounded-md text-sm font-medium transition-all relative
                      ${pathname === link.href
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}
                    `}
                  >
                    {link.label}
                    {/* Animated underline on hover */}
                    <span className="block absolute left-1/2 -bottom-1 w-0 group-hover:w-4/5 group-focus:w-4/5 h-0.5 rounded-full translate-x-[-50%] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open main menu"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!menuOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile push-down menu (slides down from navbar, pushes content down) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-white/95 dark:bg-gray-900/95 shadow-lg border-b border-blue-200 dark:border-gray-800
          ${menuOpen ? "max-h-96 py-3" : "max-h-0 py-0"}
        `}
        style={{
          transitionProperty: "max-height, padding",
        }}
        aria-label="Mobile Navigation"
      >
        <ul className="flex flex-col gap-1 py-2 px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center rounded-lg px-4 py-2 text-base font-medium transition-all
                ${
                  pathname === link.href
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
