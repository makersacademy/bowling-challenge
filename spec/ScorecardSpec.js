'use strict';

describe('Scorecard', function(){
  var scorecard;
  var isFrameComplete;
  var isFrameStrike;
  var isFrameSpare;

  beforeEach(function(){
    spyOn(window, 'Frame').and.callFake(function() {
      let rolls = [];
      let emptyFrame = jasmine.createSpyObj('frame', ['addRoll', 'getRolls', 'isComplete', 'isStrike', 'isSpare']);
      emptyFrame.getRolls.and.callFake(function() { return rolls; });
      isFrameComplete = false;
      emptyFrame.isComplete.and.callFake(function() { return isFrameComplete; });
      isFrameStrike = false;
      emptyFrame.isStrike.and.callFake(function() { return isFrameStrike; });
      isFrameSpare= false;
      emptyFrame.isSpare.and.callFake(function() { return isFrameSpare; });
      return emptyFrame;
    });

    scorecard = new Scorecard();
  });

  describe("getLastFrame", function(){
    it('returns the last frame', function(){
      scorecard.createNewFrame();
      scorecard.createNewFrame();
      scorecard.createNewFrame();
      expect(scorecard.getLastFrame()).toEqual(scorecard.getFrames()[2]);
    });
  });

  describe("createNewFrame", function(){
    it('creates a new frame', function(){
      scorecard.createNewFrame();
      expect(Frame).toHaveBeenCalled();
    });
  });

  describe('getTotalScore', function(){
    it('has a total score initially equal to zero', function(){
      expect(scorecard.getTotalScore()).toEqual(0);
    });

    it('calculates the total score based on the frames and rolls', function(){
      let roll_1 = jasmine.createSpyObj('roll', ['getScore']);
      roll_1.getScore.and.callFake(function() { return 4; });

      let roll_2 = jasmine.createSpyObj('roll', ['getScore']);
      roll_2.getScore.and.callFake(function() { return 3; });

      let full_rolls = [ roll_1, roll_2 ];
      scorecard.createNewFrame();
      scorecard.getFrames()[0].getRolls.and.callFake(function() { return full_rolls; });
      isFrameComplete = true;

      expect(scorecard.getTotalScore()).toEqual(7);
    });
  });

  describe('getScores', function(){
    it("returns the scores by frame",function(){
      let roll_1 = jasmine.createSpyObj('roll', ['getScore']);
      roll_1.getScore.and.callFake(function() { return 4; });

      let roll_2 = jasmine.createSpyObj('roll', ['getScore']);
      roll_2.getScore.and.callFake(function() { return 3; });

      let full_rolls = [ roll_1, roll_2 ];
      scorecard.createNewFrame();
      scorecard.getFrames()[0].getRolls.and.callFake(function() { return full_rolls; });
      isFrameComplete = true;

      let score_array = [7];
      expect(scorecard.getScores()).toEqual(score_array);
    });
  });

  describe('calculateFrameScore', function(){
    it("returns the scores of a frame",function(){
      let roll_1 = jasmine.createSpyObj('roll', ['getScore']);
      roll_1.getScore.and.callFake(function() { return 4; });

      let roll_2 = jasmine.createSpyObj('roll', ['getScore']);
      roll_2.getScore.and.callFake(function() { return 3; });

      let full_rolls = [ roll_1, roll_2 ];
      scorecard.createNewFrame();
      scorecard.getFrames()[0].getRolls.and.callFake(function() { return full_rolls; });
      isFrameComplete = true;

      expect(scorecard.calculateFrameScore(0)).toEqual(7);
    });
  });

  describe('getTwoRollsScore', function(){
    it("returns the scores the next two rolls",function(){
      let roll_1 = jasmine.createSpyObj('roll', ['getScore']);
      roll_1.getScore.and.callFake(function() { return 4; });

      let roll_2 = jasmine.createSpyObj('roll', ['getScore']);
      roll_2.getScore.and.callFake(function() { return 3; });

      let full_rolls = [ roll_1, roll_2 ];
      scorecard.createNewFrame();
      scorecard.getFrames()[0].getRolls.and.callFake(function() { return full_rolls; });
      isFrameComplete = true;

      expect(scorecard.getTwoRollsScore(0)).toEqual(7);
    });
  });

  describe('getOneRollScore', function(){
    it("returns the scores the next two rolls",function(){
      let roll_1 = jasmine.createSpyObj('roll', ['getScore']);
      roll_1.getScore.and.callFake(function() { return 4; });

      let roll_2 = jasmine.createSpyObj('roll', ['getScore']);
      roll_2.getScore.and.callFake(function() { return 3; });

      let full_rolls = [ roll_1, roll_2 ];
      scorecard.createNewFrame();
      scorecard.getFrames()[0].getRolls.and.callFake(function() { return full_rolls; });
      isFrameComplete = true;

      expect(scorecard.getOneRollScore(0)).toEqual(4);
    });
  });

});