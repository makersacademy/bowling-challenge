describe("Player", function() {
  var player;
  var player1;
  var playerGood;
  var scoreSheet;
  var frameMock;
  var frameMockSpy;
  var lowRoll;




  beforeEach(function(){
    scoreSheet = jasmine
      .createSpyObj('scoreSheet', ['player', 'scoreCard', 'pendingSpare',
                                  'consecutiveStrikes', 'updateSpare',
                                  'spareRollOwed', 'factorInStrikes']);
    frameMockSpy = jasmine
      .createSpyObj('frameMockSpy', ['pinsAvailable', 'number', 'rollScores', 'update']);

    function FrameMock(roll, frameNumber){
      this.pinsAvailable = 10 - roll
      this.rollScores = [roll]
      this.number = frameNumber || 1
    }
    frameMock = new FrameMock();
    player = new Player("Johny", scoreSheet);
    player1 = new Player("Viola", scoreSheet, frameMock);
    playerGood = new Player("Ace", scoreSheet, frameMockSpy);
    lowRoll = 3
  });

  describe("#Constructor", function(){
    it("Has a new name", function(){
      expect(player.playerName).toEqual("Johny");
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
      spyOn(player1, 'strikeCase').and.callThrough()
      spyOn(player1, 'firstRoll').and.callThrough();
      spyOn(player1, 'rollScoreGenerator').and.returnValue(lowRoll);
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


      beforeEach(function(){
        spyOn(playerGood, 'rollScoreGenerator').and.returnValue(10);
        spyOn(playerGood, 'strikeCase').and.callThrough();
        playerGood.roll();
      });

      it("generates a roll score from the new frame's 10 pins", function(){
        expect(player1.rollScoreGenerator).toHaveBeenCalledWith(10);
      });

      it("instantiates a new Frame object", function(){
        expect(player1.currentFrame)
          .toEqual(jasmine.objectContaining({'number': 1, 'rollScores': [lowRoll], 'pinsAvailable': 7 }));
      });

      it("calls on strikeCase when there is a strike", function(){
        expect(playerGood.strikeCase).toHaveBeenCalled();
      });


      it("won't call on strikeCase if there is not a strike", function(){
        expect(player1.strikeCase).not.toHaveBeenCalled();
      });

      describe("#strikeCase", function(){

        it("will increment the rollCount again - strike", function(){
          expect(playerGood.rollCount).toEqual(2);
        });

        it("record its second roll score as pending - strike", function(){
          expect(playerGood.currentFrame)
            .toEqual(jasmine.objectContaining({'game': scoreSheet, 'rollScores': ['X', "pending"]}));
        });

        it("will update the scoresheet", function(){
          expect(playerGood.playerSS.scoreCard[1]).toEqual(['X', "pending"]);
        });
      });
    });

    describe("#secondRoll", function(){

      beforeEach(function(){
        player1.roll();
        player1.roll();
      });

      it("has already had pins wiped from previous roll", function(){
        expect(player1.currentFrame)
          .toEqual(jasmine.objectContaining({'pinsAvailable': 7}));
      });

      it("generates a roll score from the remaining pins in frame", function(){
        expect(player1.rollScoreGenerator).toHaveBeenCalledWith(7);
      });

    });
  });

  describe("#rollScoreGenerator", function(){


    it("generates a number between 0 and the number of pins left", function(){
      expect(player.rollScoreGenerator(10)).toBeLessThan(11)
    });

    it("again generates a number between 0 and pins left", function(){
      expect(player.rollScoreGenerator(5)).toBeLessThan(6)
    });

  });
});
