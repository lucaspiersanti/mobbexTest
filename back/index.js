const express = require("express");
const { mobbex } = require("mobbex");
const mobbexConfig = require("./config");

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const subscription = {
  total: 200.0,
  currency: "ARS",
  name: "Prueba",
  description: "Prueba",
  type: "dynamic",
  interval: "1m",
  trial: 1,
  limit: 0,
  webhook: "http://webhook",
  return_url: "http://return_url",
  features: ["accept_no_funds"],
};

mobbex.subscriptions
  .create(subscription)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
