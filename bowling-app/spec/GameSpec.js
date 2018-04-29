describe("Game", function() {
  var game;
  var proto = Game.prototype;
  var frame = Frame;

  beforeEach(function() {
    game = new Game();
  });

  describe('score', function() {
    it('returns the sum of rolls and bonus', function() {
       game = { bonus: [1, 2, 3, 4], rolls: [5, 5, 5, 5, 5]};
       Object.setPrototypeOf(game, proto);
       expect(game.score()).toEqual(35);
    });
    it('works with an empty bonus array', function() {
      game = { bonus: [], rolls: [5, 5, 5, 5, 5]};
      Object.setPrototypeOf(game, proto);
      expect(game.score()).toEqual(25);
   });
  });

  describe('play', function() {
    beforeEach(function() {
      spyOn(game, 'makeFirstRoll');
      spyOn(game, 'makeSecondRoll');
      spyOn(game, 'applyBonus');
    });

    it('calls this.makeFirstRoll() when rollNum === 1', function() {
      game.play(10);
      expect(game.makeFirstRoll).toHaveBeenCalled();
    });
    it('calls this.makeSeonddRoll when rollNum === 2', function() {
      game.rollNum = 2;
      game.play(10);
      expect(game.makeSecondRoll).toHaveBeenCalled();
    });
    it('calls this.applyBonus on first roll', function() {
      game.rollNum = 1;
      game.play(10);
      expect(game.applyBonus).toHaveBeenCalled();
    });
  });

  describe('makeFirstRoll', function() {
    beforeEach(function() {
      game = new Game();
      game.setupGame(frame);
      spyOn(game, 'startNextFrame');
      spyOn(game, 'nextRoll');
    });

    it('calls this.isStrike()', function() {
      spyOn(game, 'isStrike');
      game.makeFirstRoll(10);
      expect(game.isStrike).toHaveBeenCalled();
    });
    it('calls this.startNextFrame() when a strike is passed', function() {
      spyOn(game,'isStrike').and.returnValue(true);
      game.makeFirstRoll(10);
      expect(game.startNextFrame).toHaveBeenCalled();
    });
    it('does not call this.startNextFrame() when not a strike', function() {
      spyOn(game,'isStrike').and.returnValue(false);
      game.makeFirstRoll(9);
      expect(game.startNextFrame).not.toHaveBeenCalled();
    });
    it('does not call this.incrementRoll() when a strike is passed', function() {
      spyOn(game,'isStrike').and.returnValue(true);
      game.makeFirstRoll(9);
      expect(game.nextRoll).not.toHaveBeenCalled();
    });
    it('calls this.incrementRoll() when not a strike', function() {
      spyOn(game,'isStrike').and.returnValue(false);
      game.makeFirstRoll(9);
      expect(game.nextRoll).toHaveBeenCalled();
    });
  });
  
  describe('makeSecondRoll', function() {
    beforeEach(function() {
      spyOn(game, 'roll');
      spyOn(game, 'startNextFrame');
      spyOn(game, 'incrementFrame');
    });
    it('calls this.roll()', function() {
      game.makeSecondRoll(5);
      expect(game.roll).toHaveBeenCalled();
    });
    it('calls this.incrementRoll()', function() {
      game.makeSecondRoll(5);
      expect(game.startNextFrame).toHaveBeenCalled();
    });
  });

  describe('increment frame', function(){
    it('increments this.frameNum by 1', function() {
      expect(game.frameNum).toEqual(1);
      game.incrementFrame();
      expect(game.frameNum).toEqual(2);
    });
  });

  describe('nextRoll', function() {
    it('increments 1 to 2', function() {
      var game = { rollNum: 1 };
      Object.setPrototypeOf(game, proto);
      game.nextRoll();
      expect(game.rollNum).toEqual(2);
    });
    it('resets 2 to 1', function() {
      var game = { rollNum: 2 };
      Object.setPrototypeOf(game, proto);
      game.nextRoll();
      expect(game.rollNum).toEqual(1);
    });
  });

  describe('startNextFrame', function() {
    beforeEach(function(){
      game = {};
      Object.setPrototypeOf(game, proto);
      spyOn(game, 'incrementFrame');
    });

    it('calls incrementFrame', function(){
      game.startNextFrame();
      expect(game.incrementFrame).toHaveBeenCalled();
    });

    it('sets this.rollNum to 1 when rollNum = 1', function(){
      game.rollNum = 1;
      game.startNextFrame();
      expect(game.rollNum).toEqual(1);
    });

    it('sets this.rollNum to 1 when rollNum = 2', function(){
      game.rollNum = 2;
      game.startNextFrame();
      expect(game.rollNum).toEqual(1);
    });
  });

  describe('isStrike', function() {
    it('returns true when passed 10', function(){
       expect(game.isStrike(10)).toEqual(true);
    });
    it('returns false when passed a number !== 10', function(){
      expect(game.isStrike(4)).toEqual(false);
    });
  });

  describe('setupGame', function() {
    it('populates gFrames array', function() {
      game.setupGame(function(){});
      expect(game.gFrames.length).toEqual(10);
    });
  });

  describe('applyBonus', function() {
    it('applys a bonus when Frame.applyBonus returns true', function() {
       var Frame = { applyBonus: function() { return true; } };
       game.gFrames.unshift(Frame);
       game.applyBonus(10);
       expect(game.bonus[0]).toEqual(10);
    });
    it('does not apply a bonus when Frame.applyBonus returns false', function() {
      var Frame = { applyBonus: function() { return false; } };
      game.gFrames.unshift(Frame);
      game.applyBonus(10);
      expect(game.bonus[0]).toEqual(undefined);
   });
  });
});

