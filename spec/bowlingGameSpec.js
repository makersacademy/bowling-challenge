describe("Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  describe("nextBowl", function() {
    it("should create a new frame on the first bowl of the frame", function() {
      game.nextBowl(1);
      expect(game._frames[0]._frameScore).toEqual(1);
    });

    it("should bowl a second ball and add the framescore for each frame", function() {
      game.nextBowl(1);
      game.nextBowl(2);
      expect(game._frames[0]._frameScore).toEqual(3);
    });
    it("should proceed to the next frame after 2 balls of a none special frame", function() {
      game.nextBowl(1);
      game.nextBowl(2);
      expect(game._currentFrame).toEqual(2);
    });
    it("should give a bonus score on the ball after if a spare is scored", function() {
      game.nextBowl(9);
      game.nextBowl(1);
      game.nextBowl(3);
      expect(game._frames[0]._frameScore).toEqual(13);
    });
    it("should proceed to the next frame if a strike is scored", function(){
      game.nextBowl(10);
      expect(game._currentFrame).toEqual(2);
    });
    it("should give a bonus score on the next two balls if a strike is scored", function() {
      game.nextBowl(10);
      game.nextBowl(1);
      game.nextBowl(3);
      expect(game._frames[0]._frameScore).toEqual(14);
    });
    it("should give a bonus score on the next two balls if a strike is scored even with consecutve strikes", function() {
      game.nextBowl(10);
      game.nextBowl(10);
      game.nextBowl(1);
      expect(game._frames[0]._frameScore).toEqual(21);
    });
    it("should give an extra bowl on the 10th Frame if a spare is scored", function() {
      for (i=0; i < 9; i++) {
       game.nextBowl(10);
      }
      game.nextBowl(7);
      game.nextBowl(3);
      expect(game._currentFrame).toEqual(10);
      game.nextBowl(1);
      expect(game._frames[9]._rolls[2]).toEqual(1);
      expect(game._frames[9]._frameScore).toEqual(11);
    });
    it("should give an extra bowl on the 10th Frame if a strike is scored", function() {
      for (i=0; i < 12; i++) {
       game.nextBowl(10);
      }
      expect(game._frames[9]._frameScore).toEqual(30);
    });
    it("should add the total score after each frame", function() {
      game.nextBowl(7);
      game.nextBowl(1);
      expect(game._score).toEqual(8);
    });
    it("should add a bonus to the total score for the spare the roll after", function() {
      game.nextBowl(7);
      game.nextBowl(3);
      game.nextBowl(4);
      expect(game._score).toEqual(18);
    });
    it("should add a bonus to the total score for the strike the next two rolls", function() {
      game.nextBowl(10);
      game.nextBowl(3);
      game.nextBowl(4);
      expect(game._score).toEqual(24);
    });
    it("should add a bonus to the total score for the next two rolls, even with consecutive strikes", function() {
      game.nextBowl(10);
      game.nextBowl(10);
      game.nextBowl(3);
      game.nextBowl(4);
      expect(game._score).toEqual(47);
    });
    it("should give a bonus when there is a strike in the 9th frame and 10th frame", function() {
      for (i=0; i < 12; i++) {
        game.nextBowl(10);
      }
      expect(game._score).toEqual(300);
    });
  });
});


// describe("Game", function() {
//
//   beforeEach(function() {
//     game = new Game();
//     frame = new Frame();
//     secondFrame = new Frame();
//     thirdFrame = new Frame();
//     tenthFrame = new Frame(true);
//   });
//
//   describe("addFrame", function() {
//     it("should add a frame to the current game", function() {
//       game.addFrame(frame);
//       expect(game._frames).toContain(frame);
//     });
//
//     it("should add the score from that frame to a total score", function() {
//       game.nextBowl(7);
//       game.nextBowl(1);
//       expect(game._score).toEqual(8);
//     });
//
//     it("should add a bonus for a spare the frame after", function() {
//       game.nextBowl(7);
//       game.nextBowl(3);
//       game.nextBowl(5);
//       expect(game._frames[0]._frameScore).toEqual(15);
//     });
//
//     it("should add a bonus for a strike the frame after unless two strikes in a row are scored", function() {
//       frame.bowl(10);
//       game.addFrame(frame);
//       secondFrame.bowl(5);
//       secondFrame.bowl(2);
//       game.addFrame(secondFrame);
//       expect(game._score).toEqual(24);
//     });
//
//     it("should add a bonus for a strike the frame after next if two strikes in a row are scored", function() {
//       frame.bowl(10);
//       game.addFrame(frame);
//       secondFrame.bowl(10);
//       game.addFrame(secondFrame);
//       thirdFrame.bowl(5);
//       thirdFrame.bowl(2);
//       game.addFrame(thirdFrame);
//       expect(game._score).toEqual(49);
//     });
//
//     it("should correctly score consecutive strikes", function() {
//       frame.bowl(10);
//       game.addFrame(frame);
//       secondFrame.bowl(10);
//       game.addFrame(secondFrame);
//       thirdFrame.bowl(5);
//       thirdFrame.bowl(2);
//       game.addFrame(thirdFrame);
//       expect(game._score).toEqual(49);
//     });
//
//     it("should add the correct score if a spare is scored in the 10th frame", function() {
//       tenthFrame.bowl(7);
//       tenthFrame.bowl(3);
//       tenthFrame.bowl(4);
//       game.addFrame(tenthFrame);
//       expect(game._score).toEqual(14);
//     });
//
//     it("should add the correct score if a strike is scored with the first roll of the 10th frame", function() {
//       tenthFrame.bowl(10);
//       tenthFrame.bowl(5);
//       tenthFrame.bowl(5);
//       game.addFrame(tenthFrame);
//       expect(game._score).toEqual(20);
//     });
//   });
//
//     it("should add the correct score to the frame score", function() {
//       frame.bowl(7);
//       frame.bowl(2);
//       game.updateFrameScores(frame);
//       expect(frame._frameScore).toEqual(9);
//     });
//
//     it("should add the correct score to the frame if a spare is bowled", function() {
//       frame.bowlSpare();
//       game.addFrame(frame);
//       secondFrame.bowl(5);
//       secondFrame.bowl(2);
//       game.addFrame(secondFrame);
//       expect(game._frames[0]._frameScore).toEqual(15);
//     });
//
//     it("should add the correct score to the frame if a strike is scored", function() {
//       frame.bowl(10);
//       game.addFrame(frame);
//       secondFrame.bowl(5);
//       secondFrame.bowl(2);
//       game.addFrame(secondFrame);
//       expect(game._frames[0]._frameScore).toEqual(17);
//     });
//
//     it("should add the correct score to the frame if consecutive strikes are scored", function() {
//       frame.bowl(10);
//       game.addFrame(frame);
//       secondFrame.bowl(10);
//       game.addFrame(secondFrame);
//       thirdFrame.bowl(5);
//       thirdFrame.bowl(2);
//       game.addFrame(thirdFrame);
//       expect(game._frames[0]._frameScore).toEqual(25);
//     });
//
//     it("should add the correct frame score if a spare is scored in the 10th frame", function() {
//       tenthFrame.bowl(7);
//       tenthFrame.bowl(3);
//       tenthFrame.bowl(4);
//       game.addFrame(tenthFrame);
//       expect(game._frames[0]._frameScore).toEqual(14);
//     });
//
//     it("should add the correct frame score if a strike is scored in the 10th frame", function() {
//       tenthFrame.bowl(10);
//       tenthFrame.bowl(5);
//       tenthFrame.bowl(5);
//       game.addFrame(tenthFrame);
//       expect(game._frames[0]._frameScore).toEqual(20);
//     });
//
//     it("should add total score at the end of each frame unless a spare or strike is scored", function() {
//       frame.bowl(10);
//       game.addFrame(frame);
//       secondFrame.bowl(10);
//       game.addFrame(secondFrame);
//       thirdFrame.bowl(5);
//       thirdFrame.bowl(2);
//       game.addFrame(thirdFrame);
//       expect(game._score).toEqual(49);
//     });
// });
//
// describe("Frame", function() {
//
//   beforeEach(function() {
//     frame = new Frame();
//     tenthFrame = new Frame(true);
//   });
//
//   describe("bowl", function() {
//     it("should deduct the correct amount of pins from frame", function() {
//       frame.bowl(7);
//       expect(frame._pins).toEqual(3);
//     });
//
//     it("should raise an error if bowl is used more than twice per frame", function() {
//       frame.bowl(7);
//       frame.bowl(1);
//       expect(function(){
//         frame.bowl(9);
//       }).toThrowError("You have used all your rolls in this frame");
//     });
//
//     it("without a spare or strike, users should get 2 rolls in the 10th frame", function() {
//       tenthFrame.bowl(7);
//       tenthFrame.bowl(1);
//       expect(function(){
//         tenthFrame.bowl(9);
//       }).toThrowError("You have used all your rolls in this frame");
//     });
//
//     it("should reset pins to 10 for third roll if a spare is scored in 10th frame", function() {
//       tenthFrame.bowlSpare();
//       expect(tenthFrame._pins).toEqual(10);
//     });
//
//     // it("should not add a score immediately if a spare is scored", function() {
//     //   frame.bowlSpare();
//     //   expect(frame._frameScore).toEqual(7);
//     // });
//
//     // it("should add the correct score if a spare has been scored in the previous frame")
//   });
//
//   describe("isSpare", function() {
//     it("should return true when there are 0 pins remaining after 2 rolls of a frame", function() {
//       frame.bowlSpare();
//       expect(frame.isSpare()).toEqual(true);
//     });
//   });
//
//   describe("isStrike", function() {
//     it("should return true when there are 0 pins remaining after 1 roll of a frame", function() {
//       frame.bowl(10);
//       expect(frame.isStrike()).toEqual(true);
//     });
//   });
//
//
// });
//
// //Helper Methods//
//
// Frame.prototype.bowlSpare = function() {
//   this.bowl(7);
//   this.bowl(3);
// };
