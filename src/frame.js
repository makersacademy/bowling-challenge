
var rollOne;
var rollTwo;

MAX_PINS = 10;

function Frame(rollOne, rollTwo) {
  'use strict';
  this.MAX_PINS = 10,
  this._rolls = [rollOne, rollTwo]
};

Frame.prototype.regularScore = function() {
   var totalScore = 0;
   this._rolls.forEach(function(roll){
     totalScore += roll
   });
   return totalScore
 };

 Frame.prototype.isIllegal = function(){
   return this._rolls[0] + this._rolls[1] > MAX_PINS
 };


 Frame.prototype.isStrike = function(){
   return this._rolls[0] === MAX_PINS
 };

 Frame.prototype.isSpare = function(){
   return this._rolls[0] + this._rolls[1] === MAX_PINS
 };

 Frame.prototype.spareScore = function(nextFrame){
   return this.regularScore() + nextFrame._rolls[0];
 };

 Frame.prototype.strikeScore = function(nextFrame, thirdFrame){
   if (nextFrame.isStrike()) {
   return this.regularScore() + nextFrame.regularScore() + thirdFrame._rolls[0]
 } else {
   return this.regularScore() + nextFrame.regularScore()
 }
 };
















 function Game(){
   this._frames = []
 };

 Game.prototype._buildScore = function() {
   return Math.floor(Math.random() * 11);
 };

 Game.prototype._takeTurn = function() {
   roll = 10;
   anotherRoll = 5;
   this._frames.push(new Frame(roll, anotherRoll));
 };

 Game.prototype._new = function() {
  this._frames = [];
 };

 Game.prototype._getTotal = function() {
   var total = 0;
   this._frames.forEach(function(frame){
     total += frame.regularScore();
   });
   return total;
 };

 Game.prototype.playRound = function() {
   this._new();
   for(i = 0; i <= 9; i++) {
     this._takeTurn();
   };

 };
