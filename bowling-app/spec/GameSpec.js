describe("Game", function() {
  var game;
  var proto = Game.prototype;

  beforeEach(function() {
    game = new Game();
  });

  describe('roll', function() {
    it('scores a game of all gutter balls', function() {
      for(var i = 0; i < 20; i++) {
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

  describe('incrementRoll', function() {
    it('increments 1 to 2', function() {
      var game = { rollNum: 1 };
      Object.setPrototypeOf(game, proto);
      game.incrementRoll();
      expect(game.rollNum).toEqual(2);
    });
    it('resets 2 to 1', function() {
      var game = { rollNum: 2 };
      Object.setPrototypeOf(game, proto);
      game.incrementRoll();
      expect(game.rollNum).toEqual(1);
    });
  })

  describe('setupNext', function() {
    it('calls incrementRoll when rollNum is 1', function() {
      var game = { rollNum: 1 };
      Object.setPrototypeOf(game, proto);
      spyOn(game, 'incrementRoll');
      spyOn(game, 'incrementFrame');
      game.setupNext();
      expect(game.incrementRoll).toHaveBeenCalled();
      expect(game.incrementFrame).not.toHaveBeenCalled();
    })

    it('calls incrementRoll and incrementFrame when rollNum is 2', function() {
      var game = { rollNum: 2 };
      Object.setPrototypeOf(game, proto);
      spyOn(game, 'incrementRoll');
      spyOn(game, 'incrementFrame');
      game.setupNext();
      expect(game.incrementRoll).toHaveBeenCalled();
      expect(game.incrementFrame).toHaveBeenCalled();
    });
  })

  describe('startNextFrame', function() {
    it('calls incrementFrame', function(){
      spyOn(game, 'incrementFrame');
      game.startNextFrame();
      expect(game.incrementFrame).toHaveBeenCalled;
    });
    it('sets this.rollNum to 1 when rollNum = 1', function(){
      var game = { rollNum: 1 };
      Object.setPrototypeOf(game, proto);
      game.startNextFrame();
      expect(game.rollNum).toEqual(1);
    });
    it('sets this.rollNum to 1 when rollNum = 2', function(){
      var game = { rollNum: 2 };
      Object.setPrototypeOf(game, proto);
      game.startNextFrame();
      expect(game.rollNum).toEqual(1);
    });
  })

  describe('isStrike', function() {
    it('returns true when passed 10', function(){
       expect(game.isStrike(10)).toEqual(true);
    });
    it('returns false when passed a number !== 10', function(){
      expect(game.isStrike(4)).toEqual(false);
    });
  })
});
