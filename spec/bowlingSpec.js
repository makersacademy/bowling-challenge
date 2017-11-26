describe('Bowling', function ()  {

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('#throw', function() {
    it('Throw the ball to knock over 10 pins', function () {
      expect(bowling.throw(10)).toEqual(10);
    });
  });

  describe('#recordScore', function() {
    it('Record the score of the throw', function() {
      bowling.lastScore = 10;
      bowling.record();
      expect(bowling.points[1]).toEqual(10)
    });
  });
  describe('#reducePins', function () {
    it('Reduce pins of the actual frame', function() {
      bowling.throw(5);
      bowling.reducePins(5);
      expect(bowling.frames[bowling.turn].pins).toEqual(5)
    });
  });
  describe('#increaseActualFrame', function () {
    it('increase actual frame by one if turn is even', function () {
      bowling.increaseTurn();
      bowling.increaseActualFrame();
      expect(bowling.actualFrame).toEqual(2)
    });
  });
});
