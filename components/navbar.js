import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative container p-5 mx-auto ">
      <div className="flex items-center justify-between ">
        <Link href="/">
          <a className="font-extrabold hover:text-gray-600 dark:hover:text-gray-300">
            Home
          </a>
        </Link>
        <div className="md:flex space-x-6 ">
          <a
            href="https://twitter.com/mrcvvssr"
            target="_blank"
            className="font-semibold text-sky-400 hover:text-sky-500"
          >
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
}
