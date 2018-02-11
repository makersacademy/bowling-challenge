describe('Game', function () {

  var game;

  beforeEach(function () {
    game = new Game
    basicFrame = jasmine.createSpyObj('frame', {
      'score': 8,
      'isStrike': false,
      'isSpare': false,
      '_firstRoll': 2,
      '_secondRoll': 6,
      '_isValid': true
    })
  });


  describe('storeFrame', function() {

    it('stores complete frames in an array', function() {
      game.storeFrame([1,5])
      expect(game._frames).toContain([1,5]);
    });
  });

  describe('frameScores', function() {

    it('starts with no score', function() {
      game.frameScores()
      expect(game.frameScores()).toEqual([]);
    });
  });

  describe('storeFrameScore', function() {

    it('calculates and stores the score of a basic frame', function() {
      game.storeFrameScore(basicFrame)
      expect(game.frameScores()).toContain(8);
    });
  });
});
