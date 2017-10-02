describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.addFrame();
  });

  describe('Start new game', function(){

    it('starts a new frame', function(){
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: null})
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1', function(){
      game.roundScore(10);
      expect(game.frames[0]).toEqual({frame: 1, round: 1, score: 10});
      expect(game.strike).toEqual(true);
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1 and get bonus from next two rolls in round 2', function(){
      game.roundScore(10);
      game.roundScore(1);
      game.roundScore(1);
      expect(game.frames[0]).toEqual({frame: 1, round: 1, score: 12});
    });
  });

  describe('Score a hit', function(){

    it('knock down 1 pin round 1', function(){
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: null})

      game.roundScore(1);
      expect(game.currentFrame()).toEqual({frame: 1, round: 2, score: 1})
    });
  });

  describe('Check round changes', function(){

    it('to 2 after first round', function(){
      game.roundScore(1);
      expect(game.currentFrame().round).toEqual(2);
    });
  });

  describe('Check if score', function(){

    it('is a SPARE', function(){
      game.roundScore(5);
      game.roundScore(5);
      expect(game.frames[0]).toEqual({frame: 1, round: 2, score: 10});
      expect(game.spare).toEqual(true);
      expect(game.strike).toEqual(false);
    });
  });

  describe('Check if score', function(){

    it('is a STRIKE new frame starts', function(){
      game.roundScore(10);
      expect(game.currentFrame()).toEqual({frame: 2, round: 1, score: null});
    });
  });

  describe('Check start of new frame', function(){

    it('when two rounds of a frame are finished', function(){

      var i = 0

      while (i < 3) {
        game.roundScore(5);
        i++
      };

      expect(game.currentFrame()).toEqual({frame: 2, round: 2, score: 5});
      expect(game.isSpare()).toEqual(false);
    });
  });

});
