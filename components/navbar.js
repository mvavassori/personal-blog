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
            href="https://github.com/mvavassori"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-zinc-900 hover:text-black dark:text-white dark:hover:text-zinc-100"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/marcovvssr"
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
