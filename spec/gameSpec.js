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







});
