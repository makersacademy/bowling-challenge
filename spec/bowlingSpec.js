describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Start new game', function(){

    it('starts a new frame', function(){
      console.log(game.frames)
      game.addFrame(1);
      console.log(game.frames)
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: null})
    });
  });

  describe('Score a strike', function(){

    it('in round 1', function(){
      game.addFrame(1);
      game.roundScore(1, 10);
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: 10})
    });
  });

  describe('Score a hit', function(){

    it('knock down 1 pin round 1', function(){
      game.addFrame(1);
      game.roundScore(1, 1);
      expect(game.currentFrame()).toEqual({frame: 1, round: 1, score: 1})
    });
  });

});
