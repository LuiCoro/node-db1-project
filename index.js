const server = require("./api/server.js");

const PORT = process.env.PORT || 9000;

server.get('/home', (req, res) => {
  res.status(200).send(`<h1>We Are Connected!</h1>`)
})

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});