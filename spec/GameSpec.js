describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

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

  it('keeps track of knockedDownPins', function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.knockedDownPins).toContain(4,4);
  });

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

  it('throws error if roll more than 10 pins per roll', function() {
    var expection = function() {
      game.rollBall(11);
    };
    expect(expection).toThrow();
  });

  it('throws error if rolls more than 10 pins per frame', function() {
    var expection = function(){
      game.rollBall(9);
      game.rollBall(2);
    };
    expect(expection).toThrow();
  });

});
