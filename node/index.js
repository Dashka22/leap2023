import express from "express";

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello server deer huselt tani irlee");
});

//api gsn path ruu GET huselt ireheer json butsaanaa
app.get("/leap/articles", (req, res) => {
  res.json({ name: "dashka" });
});

app.post("/", (req, res) => {
  res.send("Post huselt irsen");
});

app.listen(port, () => {
  console.log(`ene port deer server aslaa http://localhost:${port}`);
});
