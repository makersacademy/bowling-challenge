describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });
  it('score starts as 0', function() {
    expect(game.score()).toEqual(0);
  });
  it('starts with an empty scorecard', function() {
    expect(game.showScoreCard()).toEqual([]);
  });
  it('keeps score card', function() {
    game.roll(4, 5);
    expect(game.showScoreCard()[0].rollOne).toEqual(4);
    expect(game.showScoreCard()[0].rollTwo).toEqual(5);
  });
  it('starts at frame 1', function() {
    expect(game._currentFrame).toEqual(1);
  });
  it('keeps normal scoring', function() {
    game.roll(4, 5);
    expect(game.score()).toEqual(9);
  });
  it('has 20 frames only', function() {
    for (var i = 1; i <= 20; i++) {
      game.roll(6, 4);
    }
    expect(function() {
      game.roll(1, 3);
    }).toThrowError('game has finished!');
  });


  describe("Strike", function() {
    it('ends the frame; roll 2 scores 0', function() {
      game.roll(10);
      expect(game.score()).toEqual(10);
      expect(game.showScoreCard()[0].rollTwo).toEqual(0);
    });
    it('awards bonus points', function() {
      game.roll(10);
      expect(game.score()).toEqual(10);
      game.roll(4, 5);
      expect(game.score()).toEqual(28);
    });
  });
  // describe("Spare", function(){
  //
  // });


});
