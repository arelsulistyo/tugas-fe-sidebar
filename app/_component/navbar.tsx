"use client";

// import Link from "next/link";
import { usePathname } from "next/navigation";

// const links = [
//   {
//     href: "/",
//     tag: "Home",
//   },

//   {
//     href: "/dashboard",
//     tag: "Dashboard",
//   },

//   {
//     href: "/blog",
//     tag: "Blog",
//   },

//   {
//     href: "/contact",
//     tag: "Contact",
//   },
// ];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-white text-xl flex justify-between gap-8 pt-5 pb-4 px-8 sticky top-0">
      <div className="text-3xl">My App</div>
      <div className="flex pt-1 gap-4 items-center">
        <h1>User #1321</h1>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"></div>
      </div>
    </nav>
  );
}
