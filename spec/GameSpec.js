describe('Game', function() {

  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame',['roll','isStrike', 'isSpare', 'isFinished']);
  });

  it('is initiated without any frames', function() {
    expect(game._frames).toEqual([]);
  });


});
