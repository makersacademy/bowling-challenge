describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('roll', function() {
    it('scores a game of all gutter balls', function() {
      for(var i = 0; i < 10; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  })

  describe('increment frame', function(){
    it('increments this.frameNum by 1', function() {
      expect(game.frameNum).toEqual(1);
      game.incrementFrame();
      expect(game.frameNum).toEqual(2);
    });
  })

  describe('incrementRoll', function(){
    it('increments 1 to 2', function(){
      expect(game.rollNum).toEqual(1);
      game.incrementRoll();
      expect(game.rollNum).toEqual(2);
    })
    it('resets 2 to 1', function(){
      game.incrementRoll();
      game.incrementRoll();
      expect(game.rollNum).toEqual(1);
    })
  })
});
