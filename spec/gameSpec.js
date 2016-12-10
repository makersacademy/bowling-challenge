describe('Game', function () {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('has properties:', function () {
    it('10 pins', function (){
      expect(game).toEqual(jasmine.objectContaining({pins:10}));
    })
    it('frames array', function () {
      expect(game.frames).toBeDefined();
    })
  });

  it('displays the number of knocked down pins after a hit', function (){
    spyOn(Math, 'random').and.returnValue(0.5);
    game.hit();
    expect(game.remainingPinsNumber()).toEqual(5);
  })

  it('displays the score', function () {
    expect(game.displayScore()).toEqual(0);
  })









});
