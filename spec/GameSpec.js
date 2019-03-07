describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('is created with 10 empty frames, with a bonus roll for frame 10', function() {
    expect(this.fames.length).toEqual(10);
    expect(this.frames[9].length).toEqual(3);
  });

});