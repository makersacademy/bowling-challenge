describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game()
    basicFrame = jasmine.createSpyObj('frame', {
      'score': 8,
      'isStrike': false,
      'isSpare': false,
      '_firstRoll': 2,
      '_secondRoll': 6,
      '_isValid': true
    });
  });

  it('scores correctly for a gutter game', function () {
    basicFrame._firstRoll.and.returnValue(4);
    basicFrame._secondRoll.and.returnValue(4);
    for (let i = 0; i < 10; i++) {
      game.storeFrame(basicFrame)
    }
    expect(game.score(basicFrame)).toEqual(0);
    });

  it('scores correctly for a basic game with no spares or strikes', function () {
    for (let i = 0; i < 10; i++) {
      game.storeFrame(basicFrame)
    }
    expect(game.score()).toEqual(80);
  });
});
