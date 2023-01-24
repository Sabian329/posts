const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();

server.use(middlewares);
server.use(router);
server.listen(port);

app.post("/", (req, res) => {
  res.status(200).json({ message: "It worked!" });
});

app.delete("/", (req, res) => {
  res.send("DELETE Request Called");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
