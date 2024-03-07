import express from "express";
import bcrypt from "bcrypt";

const port = 8080;
const app = express();
app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.send("Hello server deer huselt tani irlee");
});

app.post("/signup", async (req, res) => {
  const { name, password } = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hash(password, salt);
  users.push({ name: name, password: hashedPassword });
  res.send("User created succesfully");
});

app.post("/signin", async (req, res) => {
  const { name, password } = req.body;
  const filteredUser = users.filter((user) => user.name === name);
  const isValid = await bcrypt.compare(password, filteredUser[0].password);

  if (isValid) {
    res.send("login succesfully");
  }
  res.send("password & username not valid");
});

app.listen(port, () => {
  console.log(`ene port deer server aslaa http://localhost:${port}`);
});
