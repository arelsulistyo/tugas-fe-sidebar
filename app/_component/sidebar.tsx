"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    tag: "Home",
  },

  {
    href: "/invoices",
    tag: "Invoices",
  },

  {
    href: "/customers",
    tag: "Customers",
  },

  {
    href: "/blog",
    tag: "Blog",
  },

  {
    href: "/contact",
    tag: "Contact",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-midnight h-screen pt-6 p-8 flex-col fixed left-0 text-white text-xl font-normal">
      {links.map((link) => (
        <ul>
          <li>
            <Link href={link.href}>{link.tag}</Link>
          </li>
        </ul>
      ))}
    </aside>
  );
}
