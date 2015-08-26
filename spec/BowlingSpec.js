describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('throw a ball', function() {
    it ('increases roll number when throwing a ball', function() {
      var rollTest = bowling.rollNb;
      bowling.throw();
      expect(bowling.rollNb).toEqual(rollTest+2);
    });

    it ('returns a number of points', function() {
      expect(bowling.throw()).toEqual(bowling.points);
    });

    it ('adds the number of points to the total score', function() {
      expect(bowling.UpdateScore()).toEqual(bowling.totalScore);
    });

    it ('records scores history', function() {
      bowling.frameHist = [];
      bowling.points = bowling.rollScore();
      bowling.UpdateHist();
      expect(bowling.frameHist.pop()).toEqual(bowling.points);
    });

    it ('returns true when there is a strike', function() {
      bowling.points = 10;
      bowling.isStrike();
      expect(bowling.strike).toBe(true);
    });

  });

  describe('play a game', function() {
    it ('can simulate a 10-frame-game', function() {
      bowling.play();
      expect(bowling.frameNb).toEqual(10);
    });

  });

});