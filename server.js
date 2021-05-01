const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 3000;

const Harrow = require("./challenge-london-mini-guide/data/Harrow.json");
const Heathrow = require("./challenge-london-mini-guide/data/Heathrow.json");
const Stratford = require("./challenge-london-mini-guide/data/Stratford.json");
app.get("/", (req, res) => {
  res.send("city/category");
});

app.get("/:city/:category", (req, res) => {
  const city = req.params.city;
  const category = req.params.category;

  // check if city and category are provided
  if (city && category) {
    if (city === "Harrow") {
      res.status(200).json(Harrow[category]);
    } else if (city === "Heathrow") {
      res.status(200).json(Heathrow[category]);
    } else if (city === "Stratford") {
      res.status(200).json(Stratford[category]);
    }
  } else {
    res.status(404).json({ msg: "bad request" });
  }
});

app.listen(PORT);
