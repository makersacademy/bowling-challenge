describe("Frame", function(){
  var frameA;
  var frameB;
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
    frameA = new Frame(rollZero);
    frameB = new Frame(rollFive, 2);
  });

    it("records the first roll", function(){
      expect(frameA.rollScores).toEqual([rollZero]);
      expect(frameB.rollScores).toEqual([rollFive]);
    });

    it("has 10 pins available minus the first roll", function(){
      expect(frameA.pinsAvailable).toEqual(10 - rollZero);
      expect(frameB.pinsAvailable).toEqual(10 - rollFive);
    });

    it("has a frame number which defaults to one", function (){
      expect(frameA.number).toEqual(1)
      expect(frameB.number).toEqual(2)
    });
  });

  describe("#wipePins", function(){

    beforeEach(function(){
      frameA.update(rollSeven);
      frameB.update(rollThree);
    });


    it("reduces the number of pins available based on roll", function (){
      expect(frameA.pinsAvailable).toEqual(10);
      expect(frameB.pinsAvailable).toEqual(5);
    });


    describe("#update", function(){


      it("updates the rollScores with the new roll", function(){
        expect(frameA.rollScores).toContain(rollZero, rollSeven);
        expect(frameB.rollScores).toContain(rollFive, rollThree);
      });
    });
  });
});
