import { getAllPostIds, getPostData } from "../../lib/posts";
// import Layout from '../../components/layout'
import Head from "next/head";
import Date from "../../components/date";
// import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  //gets markwdown posts ids
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
  };
}

export async function getStaticProps({ params }) {
  //returns an array of possible values for id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  //React Component that fetches necessary data for the post with id
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="container mx-auto p-5 mb-12">
        <h1 className="mt-8 text-3xl font-bold ">{postData.title}</h1>
        <div className="mt-1 mb-7">
          <small>
            <Date dateString={postData.date} />
          </small>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}
