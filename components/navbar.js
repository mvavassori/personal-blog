import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative container p-5 mx-auto ">
      <div className="flex items-center justify-between ">
        <Link href="/">
          <a className="font-extrabold hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </a>
        </Link>
        <div className="md:flex space-x-6 ">
          <a
            href="https://twitter.com/mvavassori_TW"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-400 hover:text-sky-500"
          >
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
}
