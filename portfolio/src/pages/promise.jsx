import { useEffect, useState } from "react";

export default function Promise() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();
    setUsers(data?.results);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex gap-[10px] p-[20px]">
        {Array(8)
          .fill("1")
          .map(() => {
            return (
              <div className="border border-blue-300 shadow rounded-md  w-[200px] h-[300px]">
                <div className="animate-pulse flex ">
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-[20px] bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="h-[140px] bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div className="flex gap-[10px] p-[20px]">
      {users &&
        users?.map((user, index) => {
          return (
            <div
              key={index}
              className="border-[1px] border-black rounded w-[200px] h-[300px]"
            >
              <div>
                {user?.name?.first} {user?.name?.last}
              </div>
              <img className="w-full mt-2" src={user?.picture?.medium} alt="" />
            </div>
          );
        })}
    </div>
  );
}
