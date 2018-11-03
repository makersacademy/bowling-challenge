'use strict';

describe('BowlingGame', function(){
  var bowlinggame;
  var player;
  var scorecard;

  beforeEach(function(){
    scorecard = jasmine.createSpyObj('scorecard', ['getTotalScore']);
    player = jasmine.createSpyObj('player', ['getName']);
    player.getName.and.callFake(function() {return "John"; });
    bowlinggame = new BowlingGame(player);

    spyOn(window, 'Scorecard').and.callFake(function() {
      return scorecard;
    });
  });

  describe('getPlayer', function(){
    it('returns the player', function(){
      expect(bowlinggame.getPlayer()).toEqual(player);
    });
  });

  describe('getScorecard', function(){
    it('returns the scorecard', function(){
      scorecard.getTotalScore.and.callFake(function() {return 0; });
      expect(bowlinggame.getScorecard().getTotalScore()).toEqual(0);
    });
  });
  
});
