const express = require("express");

const schedule = require("./services/soccerScheduleDataService.js");
const standings = require("./services/soccerStandings.js");

const app = express();

const port = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/preMatch", (req, res) => {
  const test = [{ id: 1, name: "test" }];
  res.json(test);
});

app.get("/api/schedule", (req, res) => {
  const response = schedule.getSoccerSchedule();
  res.json(response);
});

app.get("/api/standings", (req, res) => {
  const response = standings.getStandingsService();
  res.json(response);
});

app.listen(port, () => console.log(`Server starting on ${port}`));

// "start": "node backend/server.js",
//     "client": "npm run start --prefix ../",
//     "server": "nodemon backend/server.js",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
