import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const API_KEY = "AIzaSyAk0kcufGbvcvPbv54imWEQu3J3ehs8Ak4";

app.post("/api/ia", async (req, res) => {
  const { sentimento } = req.body;

  const resposta = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Sentimento de hoje: ${sentimento}`
          }]
        }]
      })
    }
  );

  const data = await resposta.json();
  res.json(data);
});

app.listen(3000);
