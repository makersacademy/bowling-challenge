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
      expect(bowling.points[0]).toEqual(10)
    });
  });

});
