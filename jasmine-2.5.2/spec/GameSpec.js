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
  it('knocks down pins that are hit', function() {
    game.knockDownPins(6);
    expect(game.getPins()).toEqual(4);
  });
  it('knows when no pins are left standing', function() {
    game.knockDownPins(10);
    expect(game.areNoPinsLeft()).toEqual(true);
  });
  it('knows when end of frame after second roll', function() {
    spyOn(game, 'getRoll').and.returnValue(2);
    expect(game.isEndOfFrame()).toEqual(true);
  })
  it('knows when end of frame if no pins are standing', function() {
    spyOn(game, 'getPins').and.returnValue(0);
    expect(game.isEndOfFrame()).toEqual(true);
  });
  it('increments roll when not end of frame', function() {
    spyOn(game, 'isEndOfFrame').and.returnValue(false);
    game.updateRoll();
    expect(game.getRoll()).toEqual(2);
  });
  it('decrements roll when it is end of frame', function() {
    spyOn(game, 'isEndOfFrame').and.returnValue(true);
    game.updateRoll();
    expect(game.getRoll()).toEqual(1);
  })
});
// things it does:
// increments frame unless frame 10
// puts all pins up again
// runs a game start to finish ignoring scoring and bonuses


// old stuff from procedural version
  // it('sets number of hits and updates pins', function() {
  //   game.setHits(6);
  //   expect(game.getHits()).toEqual(6);
  // });
  //
  // it('sets bonus when there is one', function() {
  //   debugger;
  //   spyOn(game, 'getExtra').and.returnValue(2);
  //   game.setHits(6);
  //   game.updateBonus();
  //   expect(game.getExtra()).toEqual(2);
  //   expect(game.getBonus()).toEqual(12);
  // })
  // it('sets no bonus when there isn\'t one', function() {
  //   spyOn(game, 'getExtra').and.returnValue(0);
  //   game.setHits(6);
  //   game.updateBonus();
  //   expect(game.getBonus()).toEqual(0);
  // });
  // it('sets strikes', function() {
  //   spyOn(game, 'getPins').and.returnValue(0);
  //   spyOn(game, 'getRoll').and.returnValue(1);
  //   game.updateStrikeOrSpare();
  //   expect(game.getStrikeOrSpare()).toEqual("Strike")
  // });
  // it('sets spares', function() {
  //   spyOn(game, 'getPins').and.returnValue(0);
  //   spyOn(game, 'getRoll').and.returnValue(2);
  //   game.updateStrikeOrSpare();
  //   expect(game.getStrikeOrSpare()).toEqual("Spare")
  // });
  // it('recognises when no pins left', function() {
  //   spyOn(game, 'getPins').and.returnValue(8);
  //   spyOn(game, 'getHits').and.returnValue(8);
  //   expect(game.noPinsLeft()).toEqual(true);
  // });
  // it('updates when a spare', function() {
  //   spyOn(game, 'getRoll').and.returnValue(1);
  //   game.updateStrikeOrSpare();
  //   expect(game.getStrikeOrSpare()).toEqual("Strike");
  // });
  // it('updates when a strike', function() {
  //   spyOn(game, 'getRoll').and.returnValue(2);
  //   game.updateStrikeOrSpare();
  //   expect(game.getStrikeOrSpare()).toEqual("Spare");
  // });
  // it('updates running total', function() {
  //   spyOn(game, 'getHits').and.returnValue(43);
  //   spyOn(game, 'getBonus').and.returnValue(20);
  //   game.updateRunningTotal();
  //   expect(game.getRunningTotal()).toEqual(63);
  // });
  // it('recognises when a new frame after roll 2', function() {
  //   spyOn(game, 'getRoll').and.returnValue(2);
  //   expect(game.isNewFrame()).toEqual(true);
  // });
  // it('recognises when a new frame after a strike', function() {
  //   spyOn(game, 'getStrikeOrSpare').and.returnValue('Strike');
  //   expect(game.isNewFrame()).toEqual(true);
  // });
