describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
    game.totalScore = 0;
    jasmine.getFixtures().fixturesPath = './lib/views';
    loadFixtures('index.erb');
    $.holdReady(false);
  });

  function nineFrames() {
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
  };

  it('should be able to bowl', function() {
    frame.bowl(3),
    expect(frame.currentFrame[0]).toEqual(3);
  });

  it('should clear after two bowls', function() {
    frame.bowl(3),
    frame.bowl(3),
    expect(frame.currentFrame.length).toEqual(0);
  });

  it('should add to the game array when frame ends', function() {
    frame.bowl(3),
    frame.bowl(3),
    expect(game.gameArray[0]).toEqual([3,3]);
  });

  it('should be able to add stikes to game', function() {
    frame.bowl(10),
    expect(game.gameArray[0][0]).toEqual(10);
  });

  it('should not allow a throw of more than 10', function() {
    frame.bowl(7),
    expect(function() {frame.bowl(7);}).toThrow('Cannot exceed the maximum of ten pins!');
  });

  it('should not allow a throw of more than 10', function() {
    expect(function() {frame.bowl(11);}).toThrow('Cannot exceed the maximum of ten pins!');
  });

  it('should allow nine bowls', function() {
    nineFrames();
    expect(game.gameArray.length).toEqual(9);
  });

  it('should allow three strikes on the last frame', function() {
    nineFrames();
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    expect(game.gameArray[9]).toEqual([10,10,10]);
  });

  it('should allow three throws if first is a strike on the last frame', function() {
    nineFrames();
    frame.bowl(10);
    frame.bowl(5);
    frame.bowl(4);
    expect(game.gameArray[9]).toEqual([10,5,4]);
  });

  it('should allow two throws if not a strike or spare on the last frame', function() {
    nineFrames();
    frame.bowl(3);
    frame.bowl(5);
    expect(game.gameArray[9]).toEqual([3,5]);
  });

  it('should allow three throws if a spare is thrown on the last frame', function() {
    nineFrames();
    frame.bowl(5);
    frame.bowl(5);
    frame.bowl(8);
    expect(game.gameArray[9]).toEqual([5,5,8]);
  });

  it('should not allow a throw of more than 10', function() {
    nineFrames();
    frame.bowl(7),
    expect(function() {frame.bowl(7);}).toThrow('Cannot exceed the maximum of ten pins!');
  });

  it('should not allow more than 10 frames', function() {
    nineFrames();
    frame.bowl(7);
    frame.bowl(2);
    expect(function() {frame.bowl(7);}).toThrow('Game is over!');
  });

  it('should know if score is under ten', function() {
    expect(frame.isUnderTen(7)).toEqual(true);
  });

  it('should know if score is a strike', function() {
    expect(frame.isAStrike(10)).toEqual(true);
  });

  it('should add bowl to current frame', function() {
    frame.addToFrame(7);
    expect(frame.currentFrame[0]).toEqual(7);
  });

  it('place a bowling score', function() {
    $('#button0').click();
    expect('#bowl1').toContainText('0');
  });
});
