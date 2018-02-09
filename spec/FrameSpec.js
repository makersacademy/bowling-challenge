describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("enters bowl scores", function() {
    it("enters a first bowl into a frame", function() {
      frame.enterRoll(3);
      expect(frame.bowls).toEqual([3])
    });

    it("enters a first bowl into a frame", function() {
      frame.enterRoll(3);
      frame.enterRoll(1);
      expect(frame.bowls).toEqual([3,1])
    });

    it("knows the score of a complete frame", function() {
      frame.enterRoll(3);
      frame.enterRoll(1);
      expect(frame.total).toEqual(4)
    });
  });

  describe("bowling a spare", function() {
    it("is not a spare by default", function() {
      expect(frame.isSpare).toEqual(false)
    });

    it("knows it's a spare", function() {
      frame.enterRoll(7);
      frame.enterRoll(3);
      expect(frame.isSpare).toEqual(true)
    });
  });

  describe("bowling a strike", function() {
    it("is not a strike by default", function() {
      expect(frame.isStrike).toEqual(false)
    });

    it("knows it's a strike", function() {
      frame.enterRoll(10);
      expect(frame.isStrike).toEqual(true)
    });
  });
//
//   describe("10th frame", function() {
//     it("knows it is not the last frame", function() {
//       expect(frame.isLastFrame).toEqual(false)
//     });
//
//     it("knows it is the last frame", function() {
//       frame.matchScores = [1,2,3,4,5,6,7,8,9]
//       frame.roll(1);
//       frame.roll(0);
//       frame.closeFrame();
//       expect(frame.isLastFrame).toEqual(true)
//     });
//
//     it("ends the game after 10th frame without bonuses", function() {
//       frame.matchScores = [1,2,3,4,5,6,7,8,9]
//       frame.roll(1);
//       frame.roll(0);
//       expect(frame.closeFrame()).toEqual("Game over")
//     });
//
//     it("does not end game if 10th frame is spare", function() {
//       frame.matchScores = [1,2,3,4,5,6,7,8,9]
//       frame.roll(9);
//       frame.roll(1);
//       expect(frame.closeFrame()).not.toEqual("Game over")
//     });
//
//     it("allows extra roll if 10th frame is spare", function() {
//       frame.matchScores = [1,2,3,4,5,6,7,8,9]
//       frame.roll(9);
//       frame.roll(1);
//       expect(frame.closeFrame()).toEqual("One more roll")
//     });
//
//     it("counts extra roll score if 10th frame is spare", function() {
//       frame.matchScores = [1,2,3,4,5,6,7,8,9]
//       frame.roll(9);
//       frame.roll(1);
//       frame.closeFrame();
//       frame.roll(3);
//       frame.closeFrame();
//       frame.recalculateTotal();
//       expect(frame.runningTotal).toEqual(58)
//     });
//
//     it("allows 2 extra rolls if 10th frame is strike", function() {
//       frame.matchScores = [1,2,3,4,5,6,7,8,9]
//       frame.roll(10);
//       expect(frame.closeFrame()).toEqual("Two more rolls")
//     });
//
//     it("allows 2 extra rolls if 10th frame is strike", function() {
//       frame.matchScores = [1,2,3,4,5,6,7,8,9]
//       frame.roll(10);
//       frame.closeFrame()
//       frame.roll(3);
//       frame.roll(4);
//       frame.closeFrame();
//       expect(frame.runningTotal).toEqual(62)
//     });
//   });
//
//   describe("perfect game", function() {
//     it("has a score of 300", function() {
//       for(var i=0; i < 10; i++){
//         frame.roll(10);
//         frame.closeFrame();
//         console.log(frame.isLastFrame)
//       }
//       frame.roll(10);
//       frame.roll(10);
//       frame.closeFrame();
//       expect(frame.runningTotal).toEqual(300)
//     });
//   });
//
//   describe("gutter game", function() {
//     it("has a score of 0", function() {
//       for(var i=0; i < 10; i++){
//         frame.roll(0);
//         frame.roll(0);
//         frame.closeFrame();
//       }
//       expect(frame.runningTotal).toEqual(0)
//     });
//   });
//
//   it("gives the correct total for the example README game", function() {
//     frame.roll(1);
//     frame.roll(4);
//     frame.closeFrame();
//     frame.roll(4);
//     frame.roll(5);
//     frame.closeFrame();
//     frame.roll(6);
//     frame.roll(4);
//     frame.closeFrame();
//     frame.roll(5);
//     frame.roll(5);
//     frame.closeFrame();
//     frame.roll(10);
//     frame.closeFrame();
//     frame.roll(0);
//     frame.roll(1);
//     frame.closeFrame();
//     frame.roll(7);
//     frame.roll(3);
//     frame.closeFrame();
//     frame.roll(6);
//     frame.roll(4);
//     frame.closeFrame();
//     frame.roll(10);
//     frame.closeFrame();
//     frame.roll(2);
//     frame.roll(8);
//     frame.closeFrame();
//     frame.roll(6)
//     frame.closeFrame();
//     expect(frame.runningTotal).toEqual(133)
//   });
//
});
