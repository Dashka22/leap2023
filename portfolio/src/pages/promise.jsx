import { useEffect, useState } from "react";

export default function Promise() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=100");
      const data = await res.json();
      setArticles(data);
      setFilteredArray(data);
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
