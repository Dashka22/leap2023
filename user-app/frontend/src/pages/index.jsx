import { useEffect, useState } from "react";
import { uuid } from "uuidv4";

const API_URL = "http://localhost:8080";
const headerConfig = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export default function Home() {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: headerConfig,
        method: "POST",
        body: JSON.stringify({
          ...userData,
          id: uuid(),
        }),
      });
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    if (name == "name") {
      setUserData({
        ...userData,
        name: value,
      });
    } else {
      setUserData({
        ...userData,
        age: value,
      });
    }
  };

  const handleEdit = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        headers: headerConfig,
        method: "PUT",
        body: JSON.stringify({
          ...userData,
        }),
      });
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        headers: headerConfig,
        method: "DELETE",
      });
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" bg-gray-500 w-[500px] h-[500px] ">
      <input
        value={userData.name}
        type="text"
        onChange={handleChangeInput}
        name="name"
      />
      <input
        value={userData.age}
        className="mx-2"
        type="number"
        onChange={handleChangeInput}
        name="age"
      />
      <button onClick={handleSubmit}>Submit</button>

      {users?.map((user, index) => {
        return (
          <div key={user?.id} className="flex gap-1">
            <p>{user?.name}</p>
            <p>{user?.age}</p>
            <button onClick={() => handleDelete(user?.id)}>Delete</button>
            <button onClick={() => handleEdit(user?.id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}
