describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['roll']);
  });

  it('the game starts at the beginning on zero', function () {
    expect(game.startGame()).toBe(0);
  });

  it('the game can be a gutter game, where no points are scored', function() {
    // roll 10 rolls scoring zero???
    expect(game.gutterBall()).toBe(0);
  });

  it('the game has a maximum points of 300', function () {
    for (var i = 0; i < 20; i++); // i++ is shorthand for i + 1
    // frame SPYObj
    frame.roll(10);
    // game.roll(10);
    expect(game.maxScore()).toEqual(300);
  });





});
