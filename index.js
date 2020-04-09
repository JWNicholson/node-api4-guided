const server = require("./api/server.js");

//make port dynamic, so heroku can assign one. If that fails use 5000
const port = process.env.PORT || 5000;
//const port = 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
