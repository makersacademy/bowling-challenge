describe('Bowling', function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe("has a first roll", function(){
    it('and shows the score for that roll', function(){
      bowling.firstRoll(1);
      expect(bowling.roll1).toEqual(1);
    });

    it('and shows a total score', function(){
      bowling.firstRoll(4);
      expect(bowling.total).toEqual(4);
    });
  });

  describe("has a second roll", function(){
    it('and shows the score for that roll', function(){
      bowling.secondRoll(2);
      expect(bowling.roll2).toEqual(2);
    });

    it('and shows the total score for the game so far', function(){
      bowling.firstRoll(1);
      bowling.secondRoll(2);
      expect(bowling.total).toEqual(3);
    });
  });

  describe("has a spare ")
});
