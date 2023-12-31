require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongo = require("./utils/mongo");
const { isErrorResult } = require("./utils/common");
const { searchTracks } = require("./controllers/search_tracks");
const { addNewTrack } = require("./controllers/add_new_track");
const { seedData } = require("./controllers/seed");

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

// allowed for all origins
// it's not secure but it's ok for this project as it's a test project
app.use(
  cors({
    origin: function (origin, callback) {
      return callback(null, true);
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/tracks", searchTracks);
app.post("/tracks", addNewTrack);
app.get("/", (req, res) => {
  res.send("Ok");
});

app.all("*", async (req, res) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).send({
    error: err.message,
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

async function main() {
  const r = await mongo.connect();

  if (isErrorResult(r)) {
    console.log("Exiting Program, because Could not connect Mongo", r.error);
    process.exit(0);
  }

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    seedData();
  });
}

main();
