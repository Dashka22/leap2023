import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    setUsers(await res.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{users && users?.map((user) => <>{user?.name?.first}</>)}</div>;
}
