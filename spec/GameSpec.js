describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = 'new Frame';
  });

  describe('scoring', function() {
    it('has a starting score of 0', function() {
      expect(game.getScore()).toEqual(0);
    });

    it('may not change the score', function() {
      game.rollBall(0);
      expect(game.getScore()).toEqual(0);
    });

    it('increase total score by amount of pins', function() {
      game.rollBall(8);
      expect(game.getScore()).toEqual(8);
    });
  })

  it('counts the rolls per frame', function() {
    game.rollBall(4);
    expect(game.getRollCount()).toEqual(1);
  });

  it('has 2 rolls per frame', function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.getRollCount()).toEqual(2);
  });

  it('starts at frame 1', function() {
    expect(game.getFrameCount()).toEqual(0);
  });

  it('goes to next frame after 2 rolls', function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.getFrameCount()).toEqual(1);
  });

  it('gets score of completed frame', function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.getScore()).toEqual(8);
  });

  it('goes to frame 2 after four rolls', function() {
    for(var i = 0; i < 4; i++) {
      game.rollBall(4);
    }
    expect(game.getFrameCount()).toEqual(2);
    expect(game.getRollCount()).toEqual(4);
  });

  describe('Bonus points', function() {
    it('gets points from 1st roll in next frame after spare', function() {
      game.rollBall(4);
      game.rollBall(6);
      game.rollBall(5);
      expect(game.getScore()).toEqual(20);
    });
  });


});
