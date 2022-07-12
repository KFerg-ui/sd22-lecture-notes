const Express = require("express");
const app = Express();
const PORT = 5000;

// app.set("port", process.env.PORT || 5000);

app.listen(PORT, () => {
  console.log("listening at 5000");
});

app.get("/", (req, res) => {
  res.send("Hey Homie");
});

app.get("/pants", (req, res) => {
  res.send("pantaloons");
});

app.get("/fingers", (req, res) => {
  res.send("digits");
});

app.get("/blips", (req, res) => {
  res.send("<h1>gorples <h2>price!</h2> gramples</h1>");
});

app.get("/:page", (req, res) => {
  console.log(`You're on this page: <h2>${req.params.page}</h2>`);
  res.send(`You're on this page: <h2>${req.params.page}</h2>`);
});
