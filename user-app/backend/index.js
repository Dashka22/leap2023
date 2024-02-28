import express from "express";
import cors from "cors";
import fs from "fs";

const DATABASE_URL = "./database.json";
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

let users = JSON.parse(fs.readFileSync(DATABASE_URL, "utf8"));

app.get("/", (request, response) => {
  response.send(users);
});

app.post("/", (request, response) => {
  users.push(request.body);
  fs.writeFileSync(DATABASE_URL, JSON.stringify(users));
  response.send(users);
});

app.delete("/:id", (request, response) => {
  const { id } = request.params;
  const filteredUser = users.filter((user) => user.id !== id);
  fs.writeFileSync(DATABASE_URL, JSON.stringify(filteredUser));
  response.send(filteredUser);
});

app.put("/:id", (request, response) => {
  const { id } = request.params;
  const { name, age } = request.body;

  const updatedUsers = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        name: name,
        age: age,
      };
    }
    return user;
  });
  fs.writeFileSync(DATABASE_URL, JSON.stringify(updatedUsers));
  response.send(updatedUsers);
});

app.listen(PORT, () => {
  console.log(`express server is working port: http://localhost:${PORT}`);
});
