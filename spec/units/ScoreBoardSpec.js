'use strict';

describe('ScoreBoard', () => {

  let scoreboard;

  beforeEach(() => {
    scoreboard = new ScoreBoard;
  });

  // creating scoreboard:
  // 1. newBoard is created. First element in board is a Frame.
  describe('newBoard', () => {
    it('exists', () => {
      expect(scoreboard.newBoard).not.toBeUndefined();
    });
    // it('creates a new scoreboard', () => {
    //   scoreboard.newBoard();
    //   expect(scoreboard.frames[0]).toBe
    // });
  })

});
// create a spy for Frame

// Tests to write:

// updating scoreboard:
// When frame 1 .roll knocks down 2 pins, score is 2

  //strikes:
// when roll_1 is 10, this.strike == true;
// when frame 1 roll 1 is 10, roll 2 is 0;
// when frame 1 rolls strike, score is 10
// when frame 1 rolls strike, and frame 2 rolls 2, 4, frame 1 score
  //is 16, frame 2 score is 6
// when frame 1: strike, frame 2: strike, frame 3: 2, 4
  // frame 1: 26, frame 2: 16, frame 3: 6
// when all frames are strikes, score is 300;

  //spares:
// when roll_1 is 10 and roll_2 0, spare is false;
// when roll_1 is 8 and roll_2 is 2, this.spare is true;
// when frame_1 is
