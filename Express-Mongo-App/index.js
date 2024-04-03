import express from "express";
import mongoose from "mongoose";

const PORT = 8080;
const app = express();

const MONGO_CONNECTION_STRING =
  "mongodb+srv://dashnyam9808:0OOAvlN3DZs20otk@leap-test.dpsdfc1.mongodb.net/";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.error(err));

app.get("", (request, response) => {
  response.send("Ajillaa");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

isButtonDisabled =
  !formikCreateFood.values.foodName ||
  !formikCreateFood.values.foodCategory ||
  !formikCreateFood.values.foodIngredients ||
  !formikCreateFood.values.foodPrice ||
  (formikCreateFood.values.isDiscount && !formikCreateFood.values.discountRate);
