describe('Scoreboard', function() {
  var game;
  var frameOne;
  var frameTwo;
  // var scoreboard;

  beforeEach(function() {
    game = new Game();
    frameOne = new Frame();
    frameTwo = new Frame();
 //   scoreboard = new Scoreboard();
  });

  it('opens with 10 frames', function() {
    expect(game.frames).toEqual(10);
  });

  it('keeps score of frames', function() {
    game.addFrame(frameOne);
    expect(game.frames).toEqual(9);
  });

  it('keeps score of multiple frames', function() {
    game.addFrame(frameOne);
    game.addFrame(frameTwo);
    expect(game.frames).toEqual(8);
  });

  it('does not accept more frames than 10', function() {
    for (var i = 0; i < 10; i++) {
      game.addFrame(frameOne); // is this function necessary?
    }
    expect(function(){ game.addFrame(frameOne); }).toThrowError('Your Game Has Ended');
  });

  it('keeps track of bonuses for strikes', function() {
    frameOne.strike = true;
    game.calculateFrameScore(frameOne);
    expect(game.bonus).toEqual(2);
  });

  it('keeps track of bonuses for spares', function() {
    frameOne.spare = true;
    game.calculateFrameScore(frameOne);
    expect(game.bonus).toEqual(1);
  });

  it('calculates points in a bonusless frame', function() {
    frameOne.rollOne = 3;
    frameOne.rollTwo = 4;
    game.calculateFrameScore(frameOne);
    expect(frameOne.points).toEqual(7);
    expect(game.bonus).toEqual(0);
  });

  it('calculates points in a strike game',function() {
    frameOne.rollOne = 10;
    game.calculateFrameScore(frameOne);
    expect(frameOne.points).toEqual(10);
  });

  it('applies backpoints', function() {
    frameOne.rollOne = 10;
    game.calculateFrameScore(frameOne);
    expect(frameOne.points).toEqual(10);
    frameTwo.rollOne = 3;
    frameTwo.rollTwo = 1;
    game.calculateFrameScore(frameTwo);
    game.calculateFrameScore(frameOne);
    expect(frameOne.points).toEqual(14);
    expect(game.bonus).toEqual(0);
  });
});