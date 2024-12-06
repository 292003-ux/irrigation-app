const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulation de l'humidité et du statut
let soilHumidity = 50; // En pourcentage
let irrigationStatus = false; // false = éteint, true = allumé

// Route pour obtenir l'humidité du sol
app.get('/api/soil-humidity', (req, res) => {
  res.json({ humidity: soilHumidity });
});

// Route pour obtenir le statut du système d'irrigation
app.get('/api/irrigation-status', (req, res) => {
  res.json({ status: irrigationStatus });
});

// Route pour modifier le statut du système d'irrigation
app.post('/api/irrigation-status', (req, res) => {
  const { status } = req.body;
  irrigationStatus = status;
  res.json({ message: `Irrigation system is now ${status ? 'ON' : 'OFF'}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
