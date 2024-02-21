import Link from "next/link";

export default function Home({ articles }) {
  return (
    <div className="flex gap-[10px] p-[20px]">
      {articles.map((article) => {
        return (
          <Link href={`/${article.slug}`}>
            <div className="border-[1px] border-solid border-black rounded-md w-[200px] h-[200px]">
              <img className=" w-[200px]" src={article.social_image} alt="" />
              <h1>{article.title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?username=gereltuyamz");
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}
