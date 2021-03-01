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
        const gamesCollection = db.collection("games");
        const gamesRouter = createRouter(gamesCollection);
        app.use("/api/games", gamesRouter);
    })
    .catch(console.err);
0
app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`);
    });0 {
    let tempRoundScore = 0;
    tempRoundScore = roundScore + rollScore;
    setRoundScore(tempRoundScore);
    setRollScore(0);

   for (var i = 0; i < 6; i++) 			if(diceArray[i].active===1){
				diceAray[i].active = -1;
			}
		}


    r0

    if (dice.active === 0 || dice.active === 1) {																	
      if (dice.active === 0) {															
        dice.active = 1;
      } else {
        dice.active = 0;  }
    }


    // if (== 0) {
    //    dice.active =1;
    //   }
    //     else {
    //        = 0;
    //     }
    //     }1 {/* */}