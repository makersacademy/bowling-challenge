describe('Bowling', function() {

  var game;

  beforeEach(function() {
    game = new Bowling();
  });


describe('frame', function() {

  it('starts at frame 1', function() {
    expect(game.frame()).toEqual(1);
  });

  it('increments the frame number()', function() {
    game.frame_increase();
    expect(game.frame()).toEqual(2);
  });

  it('starts the score at 0', function() {
    expect(game.frame_score()).toEqual(0);
  });

  });

});
