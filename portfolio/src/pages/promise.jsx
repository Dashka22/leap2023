import { useEffect, useState } from "react";

export default function Promise() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);
  const [topArticlesData, setTopArticlesData] = useState(articles);
  const [risinArticlesData, setRisinArticlesData] = useState(articles);

  const fetchData = async () => {
    try {
      const articlesRes = await fetch(
        "https://dev.to/api/articles?per_page=10"
      );
      const topArticlesRes = await fetch(
        "https://dev.to/api/articles?per_page=4&top=1"
      );
      const risingArticlesRes = await fetch(
        "https://dev.to/api/articles?per_page=4&state=rising"
      );

      const articlesData = await articlesRes.json();
      const topArticlesData = await topArticlesRes.json();
      const risingArticlesData = await risingArticlesRes.json();

      setArticles(articlesData);
      setFilteredArray(articlesData);
      setTopArticlesData(topArticlesData);
      setRisinArticlesData(risingArticlesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };

  return (
    <div>
      <div className="flex w-[100%] justify-center">
        <input
          onChange={handleSearch}
          type="text"
          className="border-[2px] border-red-500 w-[200px] h-[50px]"
        />
      </div>
      <h1 className="text-[50px]">TOP</h1>
      <div className="flex gap-3 flex-wrap">
        {topArticlesData.map((article) => {
          return (
            <div className="border-[2px] rounded-md border-red-500 m-3 h-[200px] w-[300px] p-[10px]">
              <img src={article.cover_image} alt="" />
              {article.title}
            </div>
          );
        })}
      </div>

      <h1 className="text-[50px]">Rising</h1>
      <div className="flex gap-3 flex-wrap">
        {risinArticlesData.map((article) => {
          return (
            <div className="border-[2px] rounded-md border-red-500 m-3 h-[200px] w-[300px] p-[10px]">
              <img src={article.cover_image} alt="" />
              {article.title}
            </div>
          );
        })}
      </div>

      <h1 className="text-[50px]">ALL blogs</h1>
      <div className="flex gap-3 flex-wrap">
        {filteredArray.map((article) => {
          return (
            <div className="border-[2px] rounded-md border-red-500 m-3 h-[200px] w-[300px] p-[10px]">
              <img src={article.cover_image} alt="" />
              {article.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
