"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "navActive" : "navUnActive"}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <h2>Inner Layout (Route Group Layout)</h2>
      {children} {/* Render children */}
    </>
  );
}
