const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
        const db = client.db("farkle");
        const playersCollection = db.collection("players");
        const playersRouter = createRouter(playersCollection);
        app.use("/api/players", playersRouter);
    })
    .catch(console.err);

app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`);
    });