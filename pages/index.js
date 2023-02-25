import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData: allPostsData || [],
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="container mx-auto p-5">
      <Head>
        <title>Marco Vavassori</title>
      </Head>
      <h1 className="mt-12 mb-20 text-3xl font-extrabold">
        Welcome to my website 👋
      </h1>
      <hr />
      <section className="my-6">
        <h2 className="mt-8 mb-6 text-xl font-bold">Latest posts</h2>
        {allPostsData.length === 0 ? (
          <p>No posts yet...</p>
        ) : (
        <ul>
          {allPostsData.map(({ title, excerpt, date, id }) => (
            <li
              key={id}
              className="my-7 bg-indigo-100 dark:bg-slate-800 rounded-lg p-2"
            >
              <Link href={`/posts/${id}`}>
                <a className="my-1 text-xl font-bold hover:text-indigo-600 dark:hover:text-indigo-400 underline">
                  {title}
                </a>
              </Link>
              <p className="text-gray-400 text-lg mt-3">{excerpt}</p>
              {/* <br /> */}
              <small className="text-gray-400">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        )}
      </section>
    </div>
  );
}
