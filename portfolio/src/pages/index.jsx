import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  console.log("HAHAHHAHAHAH");
  useEffect(() => {
    async function fetchData() {
      console.log();
      const res = await fetch("https://randomuser.me/api/?results={count}");
      setData(await res.json());
    }
    fetchData();
  }, [count]);

  console.log("Hi");
  console.log("Hi");
  return (
    <div>
      <div>
        <button
          className=" border-[2px] rounded-md border-red-400 w-[200px] h-[50px]"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
      </div>

      <h1>{count}</h1>
    </div>
  );
}
