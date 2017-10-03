describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.addFrame();
  });

  describe('Start new game', function(){

    it('starts a new frame', function(){
      expect(game.currentFrame()).toEqual(new Frame(game.frame))
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1', function(){
      game.roundScore(10);
      expect(game.frameRounds[0].score).toEqual(10);
      expect(game.strike).toEqual(true);
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1 and get bonus from next two rolls in round 2', function(){
      game.roundScore(10);
      game.roundScore(1);
      game.roundScore(1);
      expect(game.frameRounds[0].scoreTotal).toEqual(12);
      expect(game.strike).toEqual(false);
    });
  });

  describe('Score a hit', function(){

    it('knock down 1 pin round 1', function(){
      expect(game.currentFrame().score).toEqual(null)

      game.roundScore(1);
      expect(game.frameRounds[0].score).toEqual(1)
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
      expect(game.frameRounds[1].scoreTotal).toEqual(10);
      expect(game.spare).toEqual(true);
      expect(game.strike).toEqual(false);
    });
  });

  describe('Score a SPARE', function(){

    it('in round 2 and get bonus from first roll in next frame', function(){
      game.roundScore(5);
      game.roundScore(5);
      game.roundScore(1);
      game.roundScore(1);
      expect(game.frameRounds[1].scoreTotal).toEqual(11);
      expect(game.spare).toEqual(false);
    });
  });

  describe('Check if score', function(){

    it('is a STRIKE new frame starts', function(){
      game.roundScore(10);
      expect(game.frame).toEqual(2);
    });
  });

  describe('Check start of new frame', function(){

    it('when two rounds of a frame are finished', function(){

      var i = 0

      while (i < 3) {
        game.roundScore(5);
        i++
      };
      
      expect(game.frame).toEqual(2);
      expect(game.isSpare()).toEqual(false);
    });
  });

  describe('Check TOTAL SCORE', function(){

    it('when two frames are finished', function(){

      var i = 0

      while (i < 4) {
        game.roundScore(1);
        i++
      };

      expect(game.TOTAL_SCORE).toEqual(4);
    });
  });

  describe('Check BONUS POINTS only added for first round of next frame', function(){

    it('when a spare is scored in first round', function(){

      var i = 0

      while (i < 2) {
        game.roundScore(5);
        i++
      };

      game.roundScore(1)
      game.roundScore(1)

      expect(game.TOTAL_SCORE).toEqual(12);
      expect(game.BONUS_POINTS).toEqual(1);
    });
  });

  describe('Check BONUS POINTS only added for next two rounds of next frame', function(){

    it('when a strike is scored in first round of a frame', function(){

      game.roundScore(10);


      game.roundScore(1)
      game.roundScore(1)
      game.roundScore(1)

      expect(game.TOTAL_SCORE).toEqual(13);
      expect(game.BONUS_POINTS).toEqual(2);
    });
  });

});
