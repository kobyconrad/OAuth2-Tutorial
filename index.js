// creates the port we're connecting to
const port = 8080;

// get a connection to the mySQL database
const mySqlConnection = require(".dbHelpers/mySqlWrapper");

// handles all of the database operations related to saving/retrieving oauth2 bearere tokens
const bearerTokensDBHelper = require("./dbHelpers/bearerTokensDBHelper")(
  mySqlConnection
);

// handles DB operations related to users eg reigstering or retrieving them
const userDBhelper = require("./dbHelpers/userDBHelper")(mySqlConnection);

// parses api requests
const bodyParser = require("body-parser");

const express = require("express");

//MARK: --------------- REQUIRED OBJECTS

//MARK: --------------- SET UP MIDDLEWARE

const expressApp = express();

// sets bodyparser to parse the urlencoded post data
expressApp.use(bodyParser.urlencoded({ extended: true }));

//MARK: --------------- SET UP MIDDLEWARE

//MARK: --------------- INITIALISE THE SERVER

// init server
expressApp.listen(port, () => {
  console.log(`listening on port ${port}`);
});
