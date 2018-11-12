'use strict';

function Frame() {

this.FRAMECOUNT = 0;
this.ROLLCOUNT = -1;
var strikeMarker = [];
var strikeBonus = [];
var isItaStrike = false;
var rollvalue = [];
var s_bonus_total = 0;
this.STRIKEACUMILATOR = 0;

  Frame.prototype.rollTheball = function(user_input) {
    this.FRAMECOUNT += 1; // frame ACCUMILATER
    this.ROLLCOUNT += 1; // roll ACCUMILATER

    if (user_input === 10) {  // if a strike
      strikeMarker.push(this.ROLLCOUNT); // Setting  a strike marker
      rollvalue.push(10); // Adding a strike
      rollvalue.push(0); // and skipping a roll
      this.FRAMECOUNT += 1; // Adding a strike
      this.ROLLCOUNT += 1; // and skipping a roll
      strikeBonus.push(this.ROLLCOUNT); // Setting  a marker for bonuses
      strikeBonus.push(this.ROLLCOUNT + 1); // Setting  a marker for bonuses
        if (isItaStrike === true) { // If strike bonus is on then...
          // rollvalue[strikeMarker[this.STRIKEACUMILATOR]] =+ rollvalue[strikeBonus[this.STRIKEACUMILATOR]];
          this.rollValue(strikeMarker[this.STRIKEACUMILATOR]) =+ this.rollValue(strikeBonus[this.STRIKEACUMILATOR]);

          // look for where strike was made in rollvalue (array)
          //and add the strike bonuses
          delete strikeBonus[0]
           // remove strike bonus from array once applyed
          if(strikeBonus.length < 1) { // if strike bonus is empty
            isItaStrike = false; // Turn off strike bonus
          }
          this.STRIKEACUMILATOR =+1; // ACCUMILATE strike marker array
        }
        else if (isItaStrike === false) { // If strike bonus is on then...
        isItaStrike = true; // Turn of strike bonus
        }
    }
    else {
      rollvalue.push(user_input);
    }
  };

  Frame.prototype.total = function() {
    return rollvalue.reduce((a, b) => a + b, 0);
  }

  Frame.prototype.currentFrame = function() {
    return Math.ceil(this.FRAMECOUNT/2)
  }

  Frame.prototype.strikeCount = function() {
    return strikeMarker;
  }

  Frame.prototype.rollValue = function(x) {
    return rollvalue[x];
  }

  // Frame.prototype.spareCount = function() {
  //   return spareBonus;
  // }
};


// Array with all scores shoveled in
// to calculate the strike and spare from the index and add to the previous index

// frame.prototype.frame_1_9() = function() {
//   var bonus_strike = [] // SET BONUS STRIKE ARRAY
//   var bonus_spares = [] // SET BONUS STRIKE ARRAY
//   var frameRolls = [] // SET FRAME ROLLS ARRAY
//   var rollcount = 0 //START ROLL COUNTER
//   var total_frames = 0 // SET TOTAL FRAMES
//   while (total_frames >= 9) { // FRAMES UPTO 9
//      addstrikeBonus // ADD STRIKE BONUS (USE A METHOD FOR THIS)
//      addspareBonus // ADD SPARE BONUS (USE A METHOD FOR THIS)
//      var rolls = 1 // RE-ESTABLISH ROLLS AT 1
//      var total_frames =+ 1 // ACCUMILATE FRAMES
//
//     while (rolls =< 2) { // WHILE IN FRAME OF TWO ROLLS
//       var r = new Roll // GET USER INPUT
//       if (rolls === 1) {// IF ITS THE FIRST ROLL
//         if (r === 10) { //AND IT IS A STRIKE
//           bonus_strike.push(rollcount); // MARK THE STRIKE IN AN ARRAY
//           frameRolls.push(r); // ADD ROLL VALUE INTO FRAME ROLLS ARRAY
//           frameRolls.push(0); // ENSURE THE SECOND ROLL VALUE IS 0 AND IN FRAME ROLLS ARRAY
//           break; // BREAK THIS LOOP AND START THE NEXT FRAME
//         }
//         else {
//           frameRolls.push(r); // ADD ROLL INTO FRAME ROLLS ARRAY
//
//         }
//       }
//       else {
//         if (r + frameRolls[rollcount - 1] === 10) {
//           bonus_spare.push(rollcount); // MARK THIS IN AN ARRAY
//           frameRolls.push(r); // ADD ROLL INTO FRAME ROLLS ARRAY
//         }
//         else {
//           frameRolls.push(r); // ADD ROLL INTO FRAME ROLLS ARRAY
//         }
//       }
//       var rollcount =+ 1; // ACCUMILATE THE ROLL COUNT
//       var rolls =+ 1; // ACCUMILATE THE ROLLS
//     }
//   }
//  }
