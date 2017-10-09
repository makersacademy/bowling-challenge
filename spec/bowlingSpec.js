describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.addFrame();
  });

  describe('Start new game', function(){

    it('starts a new frame', function(){
      expect(game.currentFrame()).toEqual(new Frame(game.frameCount))
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1', function(){
      game.roundScore(10);
      expect(game.frames[0].roundOne).toEqual(10);
      expect(game.strike).toEqual(true);
    });
  });

  describe('Score a STRIKE', function(){

    it('in round 1 and get bonus from next two rolls in round 2', function(){
      game.roundScore(10);
      game.roundScore(1);
      game.roundScore(1);
      expect(game.frames[0].scoreTotal).toEqual(12);
      expect(game.strike).toEqual(false);
    });
  });

  describe('Score a hit', function(){

    it('knock down 1 pin round 1', function(){
      expect(game.currentFrame().roundOne).toEqual(null)

      game.roundScore(1);
      expect(game.frames[0].roundOne).toEqual(1)
    });
  });

  describe('Check for invalid score', function(){

    it('if round two added to round one is over 10', function(){
      expect(game.currentFrame().roundOne).toEqual(null)
      game.roundScore(2);
      console.log('1', game.frames)
      expect(game.roundScore(10)).toEqual('INVALID ENTRY')
    });
  });

  describe('Check round changes', function(){

    it('to 2 after first round', function(){
      game.roundScore(1);
      expect(game.currentFrame().roundOne).toEqual(1);
      expect(game.currentFrame().roundTwo).toEqual(null);
    });
  });

  describe('Check if score', function(){

    it('is a SPARE', function(){
      game.roundScore(5);
      game.roundScore(5);
      expect(game.frames[0].scoreTotal).toEqual(10);
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
      expect(game.frames[0].scoreTotal).toEqual(11);
      expect(game.spare).toEqual(false);
    });
  });

  describe('Check if score', function(){

    it('is a STRIKE new frame starts', function(){
      game.roundScore(10);
      expect(game.frameCount).toEqual(2);
    });
  });

  describe('Check start of new frame', function(){

    it('when two rounds of a frame are finished', function(){

      var i = 0

      while (i < 3) {
        game.roundScore(5);
        i++
      };

      expect(game.frameCount).toEqual(2);
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

  describe('Check max frames is 10', function(){

    it('and no more frames can be played', function(){

      var i = 0

      while (i < 20) {
        game.roundScore(1);
        i++
      };

      expect(game.roundScore(1)).toEqual('GAME IS OVER');
    });
  });

  describe('Score a STRIKE', function(){

    it('and get only two more rolls which add to bonus', function(){

      var i = 0

      while (i < 18) {
        game.roundScore(1);
        i++
      };

      game.roundScore(10);
      game.roundScore(1);
      game.roundScore(1);

      expect(game.frameCount).toEqual(10);
      expect(game.TOTAL_SCORE).toEqual(30);
      expect(game.BONUS_POINTS).toEqual(2);
      expect(game.roundScore(1)).toEqual('GAME IS OVER')
    });
  });

  describe('Score a SPARE in final frame', function(){

    it('and get only one more roll which adds to bonus', function(){

      var i = 0

      while (i < 18) {
        game.roundScore(1);
        i++
      };

      game.roundScore(5);
      game.roundScore(5);
      game.roundScore(1);

      expect(game.frameCount).toEqual(10);
      expect(game.TOTAL_SCORE).toEqual(29);
      expect(game.BONUS_POINTS).toEqual(1);
      expect(game.roundScore(1)).toEqual('GAME IS OVER')
    });
  });

  describe('Score a STRIKE in 9th frame', function(){

    it('and get only the tenth frame which adds to bonus', function(){

      var i = 0

      while (i < 16) {
        game.roundScore(1);
        i++
      };

      game.roundScore(10);
      game.roundScore(1);
      game.roundScore(1);

      expect(game.frameCount).toEqual(10);
      expect(game.TOTAL_SCORE).toEqual(28);
      expect(game.BONUS_POINTS).toEqual(2);

      expect(game.roundScore(1)).toEqual('GAME IS OVER')
    });
  });

  describe('Check GUTTER GAME', function(){

    it('after all frames played and score is 0', function(){

      var i = 0

      while (i < 20) {
        game.roundScore(0);
        i++
      };

      expect(game.gutterGame()).toEqual(true);
    });
  });

  describe('Check PERFECT GAME', function(){

    it('after all frames played and score is 300', function(){

      var i = 0

      while (i < 12) {
        game.roundScore(10);
        i++
      };

      expect(game.perfectGame()).toEqual(true);
      expect(game.finalScore()).toEqual(300);
    });
  });

  describe('Score a SPARE', function(){

    it('in round 1 and then a strike and get no bonus from first roll in next frame', function(){
      game.roundScore(5);
      game.roundScore(5);
      game.roundScore(10);
      game.roundScore(1);
      expect(game.frames[0].scoreTotal).toEqual(20);
      expect(game.spare).toEqual(false);
    });
  });

});
