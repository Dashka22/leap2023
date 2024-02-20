import Link from "next/link";
export default function Article({ article }) {
  return (
    <div className="">
      <Link href={"/"}>
        <h1>Back</h1>
      </Link>

      <h1 className=" text-4xl">{article.title}</h1>
      <img src={article.cover_image} alt="" />
      <div dangerouslySetInnerHTML={{ __html: article.body_html }}></div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const res = await fetch(`https://dev.to/api/articles/gereltuyamz/${slug}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}
