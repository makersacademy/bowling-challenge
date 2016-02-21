describe('Game', function() {
  var game;

  function MockFrame() {
    this.score = 8;
    this.isSpare = false;
    this.isStrike = false;
    this._throwArray = [4, 5]
  }
  MockFrame.prototype.isComplete = function () {return true;};
  MockFrame.prototype.updateScore = function (num) {this.score += num;};

  beforeEach(function() {
    game = new Game('Rufus', MockFrame);
  });

  describe('#lastFrame', function() {
    it('returns last frame played', function() {
      game.nextFrame();
      expect(game._lastFrame()).toEqual(new MockFrame());
    });
  });

  describe('#secondLastFrame', function() {
    it('returns second last frame played', function() {
      game.nextFrame();
      game.nextFrame();
      expect(game._secondLastFrame()).toEqual(new MockFrame());
    });
  });

  describe('#_calculateScore', function() {
    it('adds frame score to game score', function() {
      game.nextFrame();
      expect(game.score).toEqual(8);
    });
    it('adds frame score to game score', function() {
      game.nextFrame();
      game.nextFrame();
      expect(game.score).toEqual(16);
    });
  });

  describe('#_adjustScores', function() {
    it('adds spare bonus to last frame', function() {
      game.currentFrame.isSpare = true;
      game.nextFrame();
      game._adjustScores();
      expect(game._lastFrame().score).toEqual(8 + 4);
    });
    it('adds strike bonus to last frame', function() {
      game.currentFrame.isStrike = true;
      game.currentFrame.score = 10;
      game.nextFrame();
      game._adjustScores();
      expect(game._lastFrame().score).toEqual(10 + 4 + 5);
    });
    it('adds strike bonus to last frame when multiple strikes in a row', function() {
      for(i=0; i < 2; i++){
        game.currentFrame.isStrike = true;
        game.currentFrame.score = 10;
        game.currentFrame.throwArray = [10, 'X'];
        game.nextFrame();
      }
      game._adjustScores();
      console.log(game.frames);
      expect(game._secondLastFrame().score).toEqual(10 + 10 + 4);
    });
  });

  describe('#framesPlayed', function() {
    it('returns 0 by default', function() {
      expect(game._framesPlayed).toEqual(0);
    });
  });

  describe('#score', function() {
    it('returns 0 by default', function() {
      expect(game.score).toEqual(0);
    });
  });

  describe('#player', function(){
    it('returns player', function() {
      expect(game.player).toEqual('Rufus');
    });
  });
  describe('#frames', function(){
    it('is empty by default', function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#currentFrame', function(){
    it('is empty by default', function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#gameOver', function() {
    it('returns false if game in progress', function() {
      expect(game.gameOver()).toBe(false);
    });
    it('returns true if ten frames played', function() {
      while(game._framesPlayed < 10) {game.nextFrame();}
      expect(game.gameOver()).toBe(true);
    });
  });

  describe('#nextFrame', function() {
    it('throws error if current frame not complete', function() {
      spyOn(game.currentFrame, 'isComplete').and.returnValue(false);
      expect(function() {game.nextFrame()}).toThrowError('Finish frame first');
    });
    it('throws error if game over', function() {
      while(game._framesPlayed < 10) {game.nextFrame();}
      expect(function() {game.nextFrame()}).toThrowError('Game over');
    });
    it('pushes completed frame into frames', function() {
      game.nextFrame();
      expect(game.frames).toContain(game.currentFrame);
    });
    it('creates new frame', function() {
      game.nextFrame();
      expect(game.currentFrame).not.toBe(game.frames[0]);
    });
    it('increases framesPlayed', function() {
      game.nextFrame();
      expect(game._framesPlayed).toEqual(1);
    });
  });

});
