//import app file
const app = require("./app");
//import database path
const connectDatabase = require("./config/Database");
// const dotenv = require("dotenv").config({ path: "./config/.env" }); // config  path

process.on("uncaughtException", (e) => {
  console.log("shutting Up Server due to error :" + e.message);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  const dotenv = require("dotenv").config({ path: "./config/.env" });
}

//database connection
connectDatabase();

//server start
const server = app.listen(process.env.PORT, () => {
  console.log(
    "server is listening on port at http://localhost:" + process.env.PORT
  );
});

// handling exceptions
process.on("unhandledRejection", (e) => {
  console.log("shutting Up Server due to error:" + e.message);
  server.close(() => {
    process.exit(1);
  });
});
