describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });
  it('initialises default settings', function() {
    expect(game.getFrame()).toEqual(1);
    expect(game.getRoll()).toEqual(1);
    expect(game.getPins()).toEqual(10);
  });
  it('records pins still standing', function() {
    game.setPins(6);
    expect(game.getPins()).toEqual(4);
  });
  it('knows when no pins are left standing', function() {
    game.setPins(10);
    expect(game.areNoPinsLeft()).toEqual(true);
  });
  it('knows when end of frame after second roll', function() {
    spyOn(game, 'getRoll').and.returnValue(2);
    expect(game.isEndOfFrame()).toEqual(true);
  });
  it('knows when end of frame if no pins are standing', function() {
    spyOn(game, 'getPins').and.returnValue(0);
    expect(game.isEndOfFrame()).toEqual(true);
  });
  it('knows game is over after 10 frames if no recent strikes or bonus', function() {
    spyOn(game, 'getFrame').and.returnValue(11);
    expect(game.isOver(0)).toEqual(true);
    expect(game.isOver(1)).toEqual(false);
  });
  it('sets up new frame correctly', function() {
    game.setPins(6);
    game.setUpNewFrame();
    expect(game.getFrame()).toEqual(2);
    expect(game.getRoll()).toEqual(1);
    expect(game.getPins()).toEqual(10);
  });
  it('sets up new roll correctly', function() {
    game.setPins(6);
    game.setUpNewRoll();
    expect(game.getFrame()).toEqual(1);
    expect(game.getRoll()).toEqual(2);
    expect(game.getPins()).toEqual(4);
  })
  it('can run complete game', function() {
    spyOn(game, 'setPins').and.returnValue(4);
    for (var i = 0; i < 20; i++) {
      game.setPins(4);
      game.resetFrameRollAndPins();
    };
    expect(game.isOver(0)).toEqual(true);
  });
});
