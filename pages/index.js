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
      <h1 className="mt-12 mb-20 text-3xl font-extrabold">
        Hi there, welcome to my blog!👋
      </h1>
      <hr />
      <section className="my-6">
        {/* <h1 className="mt-8 mb-6 text-2xl font-bold">Blog posts</h1> */}
        <ul>
          {allPostsData.map(({ title, excerpt, date, id }) => (

            <li key={id} className="my-7 bg-indigo-100 dark:bg-slate-800 rounded-lg p-2">
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
      </section>
      {/* <hr /> */}
      {/* <div className="my-10">
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
      </div> */}
    </div>
  );
}
