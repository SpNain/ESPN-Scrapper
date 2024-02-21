let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

request(matchLink, cb);

function cb(error, response, data) {
  getHighestWicketTaker(data);
}

function getHighestWicketTaker(data) {
  let myDocument = cheerio.load(data);
  let bothBowlingTables = myDocument(".table.bowler");

  let highestWicketTakenName;
  let highestWicketsTaken;
  let economyOfHighestWicketTaker;

  for (let i = 0; i < bothBowlingTables.length; i++) {
    let bowlingTable = myDocument(bothBowlingTables[i]);
    let allTableRows = bowlingTable.find("tbody tr");

    for (let j = 0; j < allTableRows.length; j++) {
      let allTds = myDocument(allTableRows[j]).find("td");

      if (i == 0 && j == 0) {
        highestWicketTakenName = myDocument(allTds[0]).find("a").text();
        highestWicketsTaken = myDocument(allTds[4]).text();
        economyOfHighestWicketTaker = myDocument(allTds[5]).text();
      } else {
        let currentWickets = myDocument(allTds[4]).text();
        let currentEconomy = myDocument(allTds[5]).text();
        if (currentWickets > highestWicketsTaken || (currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker)) {
          highestWicketTakenName = myDocument(allTds[0]).find("a").text();
          highestWicketsTaken = currentWickets;
          economyOfHighestWicketTaker = currentEconomy;
        }
      }
    }
  }

  console.log("Name Of Highest Wicket Taker = " + highestWicketTakenName);
  console.log("Wickets Taken = " + highestWicketsTaken);
  console.log("Economy = " + economyOfHighestWicketTaker);
}
