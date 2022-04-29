import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="container mx-auto p-5">
      <Head>
        <title>Marco Vavassori</title>
      </Head>
      <h1 className="mt-12 mb-20 text-3xl font-bold">
        Hi there, welcome to my blog!👋
      </h1>
      <hr />
      <section className="my-6">
        {/* <h1 className="mt-12 mb-6 text-2xl font-semibold">Blog Posts</h1> */}
        <ul>
          {allPostsData.map(({ title, date, id }) => (
            <li key={id} className="my-7">
              <Link href={`/posts/${id}`}>
                <a className="my-1 text-xl font-extrabold hover:text-gray-600 dark:hover:text-gray-300">
                  {title}
                </a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <div className="my-10">
        <h2 className="my-3 text-xl font-semibold">What is it about?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
      </div>
      <div className="my-10">
        <h2 className="my-3 text-xl font-semibold">Who am i?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
      </div>
      <div className="my-10">
        <h2 className="my-3 text-xl font-semibold">Why?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
      </div>
    </div>
  );
}
