'use strict';

describe('Scorecard', function() {

  var scorecard;
  var frameOne;
  var frameTwo;
  var frameThree;
  var frameFour;
  var frameFive;
  var frameSix;
  var frameSeven;
  var frameEight;
  var frameNine;
  var frameTen;

  beforeEach(function() {
    frameOne = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameTwo = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameThree = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameFour = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameFive = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameSix = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameSeven = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameEight = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameNine = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    frameTen = jasmine.createSpyObj('frame', ['getCurrentFrameScore']);
    scorecard = new Scorecard(frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, frameEight, frameNine, frameTen);
  });

  it('has a default total score of zero', function() {
    expect(scorecard.totalScore).toEqual(0);
  });

  describe('with a top score', function() {

    beforeEach(function() {
      frameOne.getCurrentFrameScore.and.returnValue(30);
      frameTwo.getCurrentFrameScore.and.returnValue(30);
      frameThree.getCurrentFrameScore.and.returnValue(30);
      frameFour.getCurrentFrameScore.and.returnValue(30);
      frameFive.getCurrentFrameScore.and.returnValue(30);
      frameSix.getCurrentFrameScore.and.returnValue(30);
      frameSeven.getCurrentFrameScore.and.returnValue(30);
      frameEight.getCurrentFrameScore.and.returnValue(30);
      frameNine.getCurrentFrameScore.and.returnValue(30);
      frameTen .getCurrentFrameScore.and.returnValue(30);
    });

    it('can calculate the total socre of ten frames', function() {
      scorecard.calculateScore();
      expect(scorecard.totalScore).toEqual(300);
    });

  });

});
