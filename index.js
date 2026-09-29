const express = require ("express");
const axios = require ("axios");

const app = express ();
const port = 3000;

app.set ("view engine", "ejs");
app.use (express.static("public"));

app.get("/", (req, res) => {
res.render("index", { riddle: null, error: null });
});

app.get("/riddle", async (req, res) => {
  try {
    const response = await axios.get("https://riddles-api.vercel.app/random");
    const riddle = response.data;

    res.render("index", { riddle: riddle, error: null });
  } catch (error) {
    res.render("index", { riddle: null, error: "Could not get a riddle. Try again." });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
