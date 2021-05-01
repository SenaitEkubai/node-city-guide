const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const harrow = require("./challenge-london-mini-guide/data/Harrow.json");
const heathrow = require("./challenge-london-mini-guide/data/Heathrow.json");
const stratford = require("./challenge-london-mini-guide/data/Stratford.json");

app.get("/:city/pharmacies", (req, res) => {
  const city = req.params.city;

  if (city === "Harrow") {
    const harrowPharmacies = harrow.pharmacies.map((pharmacy) => pharmacy.name);
    res.json(harrowPharmacies);
  } else if (city === "Heathrow") {
    const HeathrowPhramacies = heathrow.pharmacies.map(
      (pharmacy) => pharmacy.name
    );
    res.json(HeathrowPhramacies);
  } else if (city === "Stratford") {
    const stratfordPhramacies = stratford.pharmacies.map(
      (pharmacy) => pharmacy.name
    );
    res.json(stratfordPhramacies);
  }
});

app.listen(PORT);
