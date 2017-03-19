'use strict';

describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  describe('#wasPerfect',function(){

    it('returns true if the player scored 300', function(){
      expect(scoreCard.wasPerfect(300)).toBe(true);
    });

    it('returns false if the player scored less than 300', function(){
      expect(scoreCard.wasPerfect(100)).toBe(false);
    });

  });

  describe('#wasGutterGame',function(){

    it('returns true if the player scored 0', function(){
      expect(scoreCard.wasGutterGame(0)).toBe(true);
    });

    it('returns false if the player scored more than 0', function(){
      expect(scoreCard.wasGutterGame(100)).toBe(false);
    });

  });

  describe('#getScore',function(){
    xit('returns the players score', function(){

    });
  });

});
