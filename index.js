const app = require("./app");
const db = require("./db/client");
const port = 3001;

const main = async () => {
  await db.connectToMongoDB();
  app.listen(port, () => {
    console.log("Backend listening in port " + port);
  });
};

main();
