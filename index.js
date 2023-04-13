const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, (req, res) => {
  console.log("Server works");
});
