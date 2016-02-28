describe("Player", function() {
  var player;
  var scoreSheet;
  var frameMock;
  var player1;
  var lowRoll;
  // var spareRoll;




  beforeEach(function(){
    scoreSheet = jasmine.createSpyObj('scoreSheet', ['player', 'scoreCard', 'consecutiveStrikes']);
    player = new Player("Viola", scoreSheet);
    function FrameMock(roll, frameNumber){
      this.pinsAvailable = 10 - roll
      this.rollScores = [roll]
      this.number = frameNumber || 1
    }
    frameMock = new FrameMock();
    player1 = new Player("Viola", scoreSheet, frameMock);
    lowRoll = 3

  });

  describe("#Constructor", function(){
    it("Has a new name", function(){
      expect(player.playerName).toEqual("Viola");
    });

    it("Has a new scoresheet", function(){
      expect(player.playerSS).toEqual(scoreSheet);
    });

    it("Has a roll counter to keep track of total rolls", function(){
      expect(player.rollCount).toEqual(0);
    });

    it("Has undefined for currentFrame", function(){
      expect(player.currentFrame).toBe(undefined);
    });
  });

  describe("#roll", function(){
    var playerPrototype;

    beforeEach(function(){
      spyOn(player1, 'firstRoll').and.callThrough();
      spyOn(player1, 'rollScoreGenerator').and.returnValue(3);
      spyOn(player1, 'secondRoll').and.callThrough();
      player1.roll();
    });


    it("roll is determined to be the first in the frame", function(){
      expect(player1.firstRoll).toHaveBeenCalled();
      expect(player1.secondRoll).not.toHaveBeenCalled();
    });

    it("roll is determined to be the second in the frame", function(){
      player1.roll()
      expect(player1.secondRoll).toHaveBeenCalled();
    });

    it("increases the rollCount by one", function(){
      expect(player1.rollCount).toEqual(1)
    });

    describe("#firstRoll", function(){

      it("generates a roll score from the new frame's 10 pins", function(){
        expect(player1.rollScoreGenerator).toHaveBeenCalledWith(10);
      });

      it("instantiates a new Frame object", function(){
        expect(player1.currentFrame)
          .toEqual(jasmine.objectContaining({'number': 1, 'rollScores': [3], 'pinsAvailable': 7 }));
      });

    });

    describe("#secondRoll", function(){
      var currentFrameMock;

      beforeEach(function(){
        player1.roll()
        currentFrameMock = player1.currentFrame;
        spyOn(currentFrameMock, 'wipePins').and.returnValue(5);
        player1.roll()
      });

      it("wipes the pins from the previous roll", function(){
        expect(currentFrameMock.wipePins).toHaveBeenCalled();
      });

      it("generates a roll score from the remaining pins in frame", function(){
        expect(player1.rollScoreGenerator).toHaveBeenCalledWith(5);
      });
    });
  });

  describe("#rollScoreGenerator", function(){


    it("generates a number between 0 and the number of pins left", function(){
      expect(player.rollScoreGenerator(10)).toBeLessThan(11)
    });

    it("again generates a number between 0 and the number of pins left", function(){
      expect(player.rollScoreGenerator(5)).toBeLessThan(6)
    });


  });
});




//
//     it("will generate a newFrame if the player is new", function(){
//       player.roll();
//       expect(game.newFrame).toHaveBeenCalled();
//     });
//
//     it("will finish the frame on the second go", function(){
//       player.roll();
//       player.roll();
//       expect(game.finishFrame).toHaveBeenCalled();
//     });
//
//   });
//
//     describe("#isFrameOver", function(){
//
//
//       it("checks if the player has had all the rolls in this frame", function(){
//         expect(player.isFrameOver()).toBeFalsy();
//       });
//
//       it("checks if the player still has rolls in the frame", function(){
//         player.roll();
//         expect(player.rollCount).toEqual(1);
//       });
//
//       it("checks if the player has no rolls left in the frame", function(){
//         player.roll();
//         expect(player.isFrameOver()).toBeFalsy();
//       });
//     });
//
//     describe("#resetRollCount", function(){
//
//       it("will reset the roll round if the frame is over", function(){
//         player.roll()
//         player.roll()
//         expect(player.rollCount).toEqual(0)
//       });
//
//       it("will not the roll round if the frame is not over", function(){
//         player.roll()
//         expect(player.rollCount).toEqual(1)
//       });
//
//     });
//
//
//

//
//
//
//
// });
