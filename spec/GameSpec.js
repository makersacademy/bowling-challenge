describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can knock down 1 pin in a roll', function() {
    game.roll(1,3);
    expect(game.knockedPins1).toEqual(1);
  });

  it('can knock down 3 pins in a second roll', function() {
    game.roll(1,3);
    expect(game.knockedPins2).toEqual(3);
  });

  it('can knock down 2 pins in 2 rolls and have a total score of 2', function() {
    game.roll(1,3);
    game.roll(2,4);
    expect(game.totalScore).toEqual(10);
  });

  it('should cumulatively increase the total score for every knocked down pin', function() {
    game.roll(2,1);
    game.roll(4,5);
    expect(game.totalScore).toEqual(12);
  });

  it('should increase the frame for every second roll', function() {
    game.roll(1,2);
    game.roll(3,4);
    expect(game.frames).toEqual(2);
  });

  it('knocked pins value should be only the amount from the previous role', function() {
    game.roll(1);
    game.roll(5);
    game.roll(2,4);
    expect(game.knockedPins2).toEqual(4);
  });

  it('should report a strike if all 10 pins are knocked down in 1 roll', function () {
      game.roll(10);
      expect(game.strike).toBeTruthy();
  });


  it('should report a spare if all 10 pins are knocked down in 1 frame', function() {
      game.roll(4,6);
      expect(game.isSpare).toBeTruthy();
  });

  it('should double the value of knockedPins1 in the next roll after a spare', function() {
    game.roll(4,6);
    game.bonusSpareRoll(2,3);
    expect(game.totalScore).toEqual(17);
  });

});
