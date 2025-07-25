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
    <nav className="sticky top-0 z-50 w-full bg-white/60 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-extrabold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-400 bg-clip-text text-transparent tracking-tight"
          >
            Hariom&nbsp;Bangali
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mobile "Push-down" menu ---- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 dark:bg-gray-900/95 shadow
          ${menuOpen ? "max-h-96 border-b border-gray-200 dark:border-gray-700" : "max-h-0"}`}
        style={{
          transitionProperty: "max-height, border",
        }}
      >
        <div className="flex flex-col pt-2 pb-4 px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center rounded-md px-3 py-2 text-base font-medium transition ${
                pathname === link.href
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
