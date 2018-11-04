'use strict';

describe('BowlingGame', function(){

  let KNOCKED_FOUR_PINS = 4;

  var bowlinggame;
  var player;
  var scorecard;
  var roll_4;
  var firstFrame;

  beforeEach(function(){
    player = jasmine.createSpyObj('player', ['getName']);
    player.getName.and.callFake(function() {return "John"; });

    firstFrame = jasmine.createSpyObj('frame', ['addRoll', 'getRoll']);
    firstFrame.getRoll.and.callFake(function(_) { return []; });

    roll_4 = jasmine.createSpyObj('roll', ['getScore']);
    roll_4.getScore.and.callFake(function() { return KNOCKED_FOUR_PINS; });

    scorecard = jasmine.createSpyObj('scorecard', ['getTotalScore', 'getFrames']);
    scorecard.getFrames.and.callFake(function() { return [firstFrame]; });

    spyOn(window, 'Scorecard').and.callFake(function() {
      return scorecard;
    });

    spyOn(window, 'Frame').and.callFake(function() {
      return emptyFrame;
    });

    spyOn(window, 'Roll').and.callFake(function() {
      return roll_4;
    });

    bowlinggame = new BowlingGame(player);
  });

  describe('getPlayer', function(){
    it('returns the player', function(){
      expect(bowlinggame.getPlayer()).toEqual(player);
    });
  });

  describe('getScorecard', function(){
    it('returns the scorecard', function(){
      expect(bowlinggame.getScorecard()).toEqual(jasmine.any(Object));
    });
  });

  describe('addNextRoll', function(){
    it('adds a new frame with a roll, on a new game', function(){
      bowlinggame.addNextRoll(KNOCKED_FOUR_PINS);
      expect(firstFrame.addRoll).toHaveBeenCalledWith(roll_4);
    });
  });
  
});
