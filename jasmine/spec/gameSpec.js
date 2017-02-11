// Count and sum the scores of a bowling game for one player (in JavaScript).
// A bowling game consists of 10 frames in which the player tries to knock down
// the 10 pins. In every frame the player can roll one or two times.
// The actual number depends on strikes and spares. The score of a frame is the
// number of knocked down pins plus bonuses for strikes and spares.
// After every frame the 10 pins are reset.

describe('Game', function() {
  var game;
    beforeEach(function() {
      game = new Game();
    });

  var frame = jasmine.createSpy('frame')

  it("exists", function(){
    expect(game).toBeDefined();
  });

  it("has 1 frame", function(){
    expect(game.frame1).toBeDefined();
  });

  it("has 10 frames", function(){
    expect(game.frame1).toBeDefined();
    expect(game.frame2).toBeDefined();
    expect(game.frame3).toBeDefined();
    expect(game.frame4).toBeDefined();
    expect(game.frame5).toBeDefined();
    expect(game.frame6).toBeDefined();
    expect(game.frame7).toBeDefined();
    expect(game.frame8).toBeDefined();
    expect(game.frame9).toBeDefined();
    expect(game.frame10).toBeDefined();
  });
  it("has a score for each frame and a total score for all frames", function(){
    var _f1Score;
    var _f2Score;
    var _f3Score;
    var _f4Score;
    var _f5Score;
    var _f6Score;
    var _f7Score;
    var _f8Score;
    var _f9Score;
    var _f10Score;
    var _totalScore;
    expect(game._f1Score).toBeDefined();
    expect(game._f2Score).toBeDefined();
    expect(game._f3Score).toBeDefined();
    expect(game._f4Score).toBeDefined();
    expect(game._f5Score).toBeDefined();
    expect(game._f6Score).toBeDefined();
    expect(game._f7Score).toBeDefined();
    expect(game._f8Score).toBeDefined();
    expect(game._f9Score).toBeDefined();
    expect(game._f10Score).toBeDefined();
  });

  describe('#frame1', function() {
    var game;
      beforeEach(function() {
        game = new Game();
      });

    var frame;
    beforeEach(function() {
      frame = new Frame();
    });

    // it ('x', function() {
    //   game.
    //
    //
    //   expect(typeof frame._roll2).toEqual('number');
    // });

  });












});
