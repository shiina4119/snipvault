import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between p-4">
      <Link className="text-4xl" href="/">
        SnipVault
      </Link>
      <ThemeToggle />
    </div>
  );
}

