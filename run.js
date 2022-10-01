const UserInterface = require("./lib/userInterface");
const Frame = require("./lib/frame");
const Formatter = require("./lib/formatter");
const ScoringTable = require("./lib/scoringTable");

const scoringTable = new ScoringTable();
const formatter = new Formatter(scoringTable);

const userInterface = new UserInterface(Frame, scoringTable, formatter);

userInterface.run();
