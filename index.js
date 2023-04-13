const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const PORT = process.env.PORT || 3000;
const app = express();
const members = require("./Members");

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage
app.get("/", (req, res) => {
  res.render("index", {
    title: "Member App",
    members,
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, (req, res) => {
  console.log("Server works");
});
