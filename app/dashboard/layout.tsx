import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <aside className="bg-midnight h-screen p-8 flex-col fixed left-0 text-white text-xl font-normal">
        <ul>
          <li>
            <Link href={"/dashboard/invoice"}>Invoice</Link>
          </li>
          <li>
            <Link href={"/dashboard/customers"}>Customers</Link>
          </li>
        </ul>
      </aside>
      <div className="">{children}</div>
    </div>
  );
}
