const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


// 377f74c5-2587-44ad-b0d9-4a1124dec2f9
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users",
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "377f74c5-2587-44ad-b0d9-4a1124dec2f9 "}}
    );
    return res.status(r.status).json(r.data);
  } catch(e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);