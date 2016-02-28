describe("Frame", function(){
  var frameA;
  var frameB;
  var frameC;
  var rollZero;
  var rollThree;
  var rollFive;
  var rollStrike;
  var rollSeven;
  var game;


  beforeEach(function(){
    rollZero = 0;
    rollThree = 3;
    rollFive = 5;
    rollSeven = 7;
    rollStrike = 10;
  });


  describe("#Constructor", function(){

  beforeEach(function(){
    game = jasmine.createSpyObj('game', ['pendingSpare', 'updateSpare'])
    spyOn(Frame.prototype, 'isStrike').and.callThrough();
    frameA = new Frame(rollZero, 1, game);
    frameB = new Frame(rollFive, 2, game);

  });

    it("records the first roll", function(){
      expect(frameA.rollScores).toEqual([rollZero]);
      expect(frameB.rollScores).toEqual([rollFive]);
    });

      describe("#isStrike", function(){

        beforeEach(function(){
          frameC = new Frame(rollStrike, 3, game);
        });

        it("checks if the first roll was a strike", function(){
          expect(Frame.prototype.isStrike).toHaveBeenCalled();
        });

        it("returns true if roll is 10", function(){
          expect(Frame.prototype.isStrike).toHaveBeenCalledWith(10);
        });

      });

    it("records a strike with a 'x' as the first roll", function(){
      expect(frameC.rollScores).toEqual(['X']);
    });


    it("has 10 pins available minus the first roll", function(){
      expect(frameA.pinsAvailable).toEqual(10 - rollZero);
      expect(frameB.pinsAvailable).toEqual(10 - rollFive);
      expect(frameC.pinsAvailable).toEqual(10 - rollStrike);
    });

    it("has a frame number which defaults to one", function (){
      expect(frameA.number).toEqual(1);
      expect(frameB.number).toEqual(2);
    });


    describe("#update", function(){

      beforeEach(function(){
        spyOn(frameA, 'isSpare');
        frameA.update(rollSeven);
        frameB.update(rollFive);
      });

      it("updates the rollScores with the new roll", function(){
        expect(frameA.rollScores).toContain(rollZero, rollSeven);
      });

      it("checks if there was a spare", function(){
        expect(frameA.isSpare).toHaveBeenCalledWith(rollSeven);
      });

      it("updates the rollScores with a '/' when spare detected", function(){
        expect(frameB.rollScores).toContain(rollFive, '/');
      });
    });
  });

  describe("#isSpare", function(){


    it("returns false if the past roll was a strike", function(){
      expect(frameC.isSpare('pending')).toBeFalsy();
    });

    it("returns false if the total for the frame is not 10", function(){
      expect(frameB.isSpare(rollThree)).toBeFalsy();
    });

    it("returns true if the total for the frame is 10", function(){
      expect(frameB.isSpare(rollFive)).toBeTruthy();
    });

    it("checks the total for the frame", function(){
      spyOn(frameB, 'total');
      frameB.isSpare(rollFive);
      expect(frameB.total).toHaveBeenCalledWith(rollFive);
    });
  });

  describe("#total", function(){
    var frameBGame;

    beforeEach(function(){
      frameB.update(rollFive);
      frameA.update(rollSeven);
      frameC.update('pending');
    });

    it("defers to the scoreSheet to calculate strikes and spares", function(){
      frameB.total();
      expect(game.pendingSpare).toHaveBeenCalled();
    });

    it("adds up frame scores when not a strike or spare", function(){
      expect(frameA.total()).toEqual(rollZero + rollSeven);
    });

  });
});
