describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.addFrame(1);
  });

  describe('Start new game', function(){

    it('starts a new frame', function(){
      // game.addFrame(1);
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: null})
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1', function(){
      // game.addFrame(1);
      game.roundScore(10);
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: 10});
      expect(game.isStrike()).toEqual(true);
    });
  });

  describe('Score a hit', function(){

    it('knock down 1 pin round 1', function(){
      // game.addFrame(1);
      game.roundScore(1);
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: 1})
    });
  });

  describe('Check round changes', function(){

    it('to 2 after first round', function(){
      // game.addFrame(1);
      game.roundScore(1);
      game.roundScore(1);
      expect(game.currentFrame().round).toEqual(2);
    });
  });

  describe('Check if score', function(){

    it('is a SPARE', function(){
      // game.addFrame(1);
      game.roundScore(5);
      game.roundScore(5);
      expect(game.currentFrame()).toEqual({frame: 1, round: 2, score: 10});
      expect(game.isSpare()).toEqual(true);
    });
  });

});
