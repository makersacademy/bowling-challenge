'use strict';

function Bowling() {
  this.totalScore = 0;
  this.currentIndex = 0;
  this.DEFAULT_SCORE_SHEET = [
    {frame: 1, roll: 1, pins: "", score:"", notes: ""},
    {frame: 1, roll: 2, pins: "", score:"", notes: ""},
    {frame: 2, roll: 1, pins: "", score:"", notes: ""},
    {frame: 2, roll: 2, pins: "", score:"", notes: ""},
    {frame: 3, roll: 1, pins: "", score:"", notes: ""},
    {frame: 3, roll: 2, pins: "", score:"", notes: ""},
    {frame: 4, roll: 1, pins: "", score:"", notes: ""},
    {frame: 4, roll: 2, pins: "", score:"", notes: ""},
    {frame: 5, roll: 1, pins: "", score:"", notes: ""},
    {frame: 5, roll: 2, pins: "", score:"", notes: ""},
    {frame: 6, roll: 1, pins: "", score:"", notes: ""},
    {frame: 6, roll: 2, pins: "", score:"", notes: ""},
    {frame: 7, roll: 1, pins: "", score:"", notes: ""},
    {frame: 7, roll: 2, pins: "", score:"", notes: ""},
    {frame: 8, roll: 1, pins: "", score:"", notes: ""},
    {frame: 8, roll: 2, pins: "", score:"", notes: ""},
    {frame: 9, roll: 1, pins: "", score:"", notes: ""},
    {frame: 9, roll: 2, pins: "", score:"", notes: ""},
    {frame: 10, roll: 1, pins: "", score:"", notes: ""},
    {frame: 10, roll: 2, pins: "", score:"", notes: ""},
  ];
  this.scoreSheet = this.DEFAULT_SCORE_SHEET;
}

Bowling.prototype.knockedDown = function(pins) {
  this.scoreSheet[this.currentIndex]["pins"] = pins
}

Bowling.prototype.currentFrame = function() {
  return this.scoreSheet[this.currentIndex]["frame"];
};

Bowling.prototype.currentRoll = function() {
  return this.scoreSheet[this.currentIndex]["roll"];
};

Bowling.prototype.currentPins = function() {
  return this.scoreSheet[this.currentIndex]["pins"];
};

Bowling.prototype.currentNotes = function() {
  return this.scoreSheet[this.currentIndex]["notes"];
};
