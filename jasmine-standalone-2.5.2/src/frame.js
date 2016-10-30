'use strict';
function Frame() {
    this.score1 = 0;
    this.score2 = 0;
    this.totalPins;
  };

  Frame.prototype.roll1 = function() {
  return this.score1 = Math.floor((Math.random() * 10) + 1);
  };

  Frame.prototype.pinsLeft = function() {
    this.totalPins = 10 - this.score1;
    return this.totalPins;
  };

  Frame.prototype.roll2 = function() {
    var pins = this.totalPins;
    this.score2 = Math.floor((Math.random() * pins) + 1);
    return this.score2
  }
// };

// Bowling.prototype.firstRoll = function () {
//   this.pinsKnocked = Math.round(Math.random() * (10 - 0));
//   this.pinsLeft = 10 - this.pinsKnocked;
//   this.changeRollNum();
//   this.changeFrameNum();
// };



// function Person(name, family) {
//     this.name = name;
//     this.family = family;
//
//     var records = [{type: "in", amount: 0}];
//
//     this.addTransaction = function(trans) {
//         if(trans.hasOwnProperty("type") && trans.hasOwnProperty("amount")) {
//            records.push(trans);
//         }
//     }
//
//     this.balance = function() {
//        var total = 0;
//
//        records.forEach(function(record) {
//            if(record.type === "in") {
//              total += record.amount;
//            }
//            else {
//              total -= record.amount;
//            }
//        });
//
// Person.prototype.getFull = function() {
//     return this.name + " " + this.family;
// };
//
// Person.prototype.getProfile = function() {
//      return this.getFull() + ", total balance: " + this.balance();
// };
