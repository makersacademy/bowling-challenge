describe('Game', function() {

  var game

  beforeEach(function() {
    game = new Game
  });

  it('starts with a score of 0',function() {
    expect(game.score).toBe(0)
  });

  it('tracks player rolls',function() {
    game.roll(5);
    game.roll(1);
    game.roll(3);
    expect(game.rolls[1]).toEqual([5,1]);
    expect(game.rolls[2]).toEqual([3])
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
    expect(game.currentFrame).toEqual(4)
  });

  it('frames account for strikes',function() {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(parseInt(game.rolls[1])).toEqual(30)
    expect(parseInt(game.rolls[2])).toEqual(20)
    expect(parseInt(game.rolls[3])).toEqual(10)
  });

  it('frames account for spares',function() {
    game.roll(5);
    game.roll(5);
    game.roll(10);
    game.roll(2);
    game.roll(3);
    expect(game.score).toEqual(40)
  });

  it('can score a perfect game',function() {
    for (i = 0 ; i < 12 ; i++) {
      game.roll(10);
    };
    expect(game.score).toEqual(300)
  });

  it('spares and strikes add up correctly',function() {
    game.roll(10);
    game.roll(2);
    game.roll(8);
    game.roll(3);
    game.roll(3);
    expect(game.score).toEqual(39)
  });

  it('can take a full game of spares',function() {
    for (i = 0 ; i < 21 ; i++) {
      game.roll(5)
    }
    expect(game.score).toEqual(150)
  });
});

// var Game = new Game;
// module.exports = Game;