describe('Bowling', function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe("has a first roll", function(){
    it('and shows the score for that roll', function(){
      bowling.frameOneFirstRoll(1);
      expect(bowling.roll1).toEqual(1);
    });

    it('and shows a total score', function(){
      bowling.frameOneFirstRoll(4);
      expect(bowling.maxTotal).toEqual(4);
    });
  });

  describe("has a second roll", function(){
    it('and shows the score for that roll', function(){
      bowling.frameOneSecondRoll(2);
      expect(bowling.roll2).toEqual(2);
    });

    it('and shows the total score for the game so far', function(){
      bowling.frameOneFirstRoll(1);
      bowling.frameOneSecondRoll(2);
      expect(bowling.maxTotal).toEqual(3);
    });
  });

  describe("has a spare", function(){
    it('and gives a player a bonus for that round which is the roll from the next round', function(){
      bowling.frameOneFirstRoll(1);
      bowling.frameOneSecondRoll(9);
      bowling.frameTwoFirstRoll(4);
      expect(bowling.totalSpareBonus1).toEqual(4);
      expect(bowling.maxTotal).toEqual(18);
    });
  });
  describe('has a strike', function(){
    it('and gives a player a bonus for that round which is the sum of the rolls from the next round', function(){
      bowling.frameOneFirstRoll(10);
      bowling.frameTwoFirstRoll(4);
      bowling.frameTwoSecondRoll(5);
      expect(bowling.maxTotal).toEqual(28);
    });
    it('calculates the total score for numerous strikes in a row', function(){
      bowling.frameOneFirstRoll(10);
      bowling.frameTwoFirstRoll(10);
      bowling.frameThreeFirstRoll(7);
      bowling.frameThreeSecondRoll(2);
      expect(bowling.maxTotal).toEqual(55);
      //if roll1 = 10 and value = 10, total strike bonus = roll1 + value

    });
    it('calculates the total score for numerous strikes in a row', function(){
      bowling.frameOneFirstRoll(10);
      bowling.frameTwoFirstRoll(10);
      bowling.frameThreeFirstRoll(10);
      bowling.frameFourFirstRoll(10);
      bowling.frameFiveFirstRoll(10);
      bowling.frameSixFirstRoll(7);
      bowling.frameSixSecondRoll(2);
      expect(bowling.maxTotal).toEqual(145);
    });

    it('calculates random scores', function(){
      bowling.frameOneFirstRoll(4);
      bowling.frameOneSecondRoll(6);
      bowling.frameTwoFirstRoll(5);
      bowling.frameTwoSecondRoll(5);
      bowling.frameThreeFirstRoll(2);
      bowling.frameThreeSecondRoll(8);
      bowling.frameFourFirstRoll(3);
      bowling.frameFourSecondRoll(7);
      bowling.frameFiveFirstRoll(6);
      bowling.frameFiveSecondRoll(4);
      bowling.frameSixFirstRoll(2);
      bowling.frameSixSecondRoll(3);
      expect(bowling.maxTotal).toEqual(73)
    });

  });
});
