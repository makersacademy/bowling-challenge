describe('Game', function() {

  var game

  beforeEach(function() {
    game = new Game;
  });

  it('starts with a score of 0',function() {
    expect(game.score).toBe(0)
  });

  it('tracks player rolls',function() {
    game.roll(5);
    game.roll(1);
    game.roll(3);
    expect(game.rolls[1]).toEqual([5,1]);
    expect(game.rolls[2]).toEqual([3]);
  });

  it('tracks current frame',function() {
    game.roll(4);
    expect(game.currentFrame).toEqual(1);
    game.roll(4);
    expect(game.currentFrame).toEqual(2);
    game.roll(4);
    expect(game.currentFrame).toEqual(2);
    game.roll(4);
    expect(game.currentFrame).toEqual(3);
    game.roll(10);
    expect(game.currentFrame).toEqual(4);
  });

  it('accounts for strikes',function() {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(game.score).toEqual(60);
  });

  // it('',function() {});

  // it('',function() {});

  // it('',function() {});

  // it('',function() {});

  // it('',function() {});

  // it('',function() {});

  // it('',function() {});

});