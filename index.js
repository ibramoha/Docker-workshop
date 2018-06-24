const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Run Docker please!"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
