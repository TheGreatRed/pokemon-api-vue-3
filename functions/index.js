const { onRequest } = require("firebase-functions/v2/https");
const axios = require('axios');
const cors = require("cors");

cors({ origin: true });

exports.getPokemonData = onRequest(async (req, res) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.query.pokemon}`
    );
    res.status(200).send(response.data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "No se pudo obtener la información del Pokémon" });
  }
});
