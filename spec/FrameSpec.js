describe("Frame", function(){
  var frameA;
  var frameB;
  var frameC;
  var rollZero;
  var rollThree;
  var rollFive;
  var rollStrike;
  var rollSeven;


  beforeEach(function(){
    rollZero = 0;
    rollThree = 3;
    rollFive = 5;
    rollSeven = 7;
    rollStrike = 10;
  });


  describe("#Constructor", function(){

  beforeEach(function(){
    spyOn(Frame.prototype, 'isStrike').and.callThrough();
    frameA = new Frame(rollZero);
    frameB = new Frame(rollFive, 2);
  });

    it("records the first roll", function(){
      expect(frameA.rollScores).toEqual([rollZero]);
      expect(frameB.rollScores).toEqual([rollFive]);
    });

      describe("#isStrike", function(){

        beforeEach(function(){
          frameC = new Frame(rollStrike, 3);
        });

        it("checks if the first roll was a strike", function(){
          expect(Frame.prototype.isStrike).toHaveBeenCalled();
        });

        it("returns true if roll is 10", function(){
          expect(Frame.prototype.isStrike).toHaveBeenCalledWith(10);
        });

      });

    it("records a strike with a 'x' as the first roll", function(){
      expect(frameC.rollScores).toEqual(['X'])
    });


    it("has 10 pins available minus the first roll", function(){
      expect(frameA.pinsAvailable).toEqual(10 - rollZero);
      expect(frameB.pinsAvailable).toEqual(10 - rollFive);
      expect(frameC.pinsAvailable).toEqual(10 - rollStrike);
    });

    it("has a frame number which defaults to one", function (){
      expect(frameA.number).toEqual(1)
      expect(frameB.number).toEqual(2)
    });


    describe("#update", function(){

      beforeEach(function(){
        frameA.update(rollSeven)
        frameB.update(rollThree)
        frameC.update()
      });

      it("updates the rollScores with the new roll", function(){
        expect(frameA.rollScores).toContain(rollZero, rollSeven);
        expect(frameB.rollScores).toContain(rollFive, rollThree);
      });

      // it("will always receive 0 if first roll was a strike", function(){
      //   expect(frameC.rollScores).toContain();
      // });

      it("checks if there was a spare")
    });
  });
});
