"use strict";

// The Game is responsible for handling scores

function Game() {
  this.scoreCard = [[0,0], // 1st frame
                    [0,0], // 2nd frame
                    [0,0], // 3rd frame
                    [0,0], // 4th frame
                    [0,0], // 5th frame
                    [0,0], // 6th frame
                    [0,0], // 7th frame
                    [0,0], // 8th frame
                    [0,0], // 9th frame
                    [0,0], // 10th frame
                    [0]];  // Extra ball
  this.frame = 0;
}
