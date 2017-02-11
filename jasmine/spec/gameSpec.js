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





});
