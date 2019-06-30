'use strict';

describe('ScoreCard', function() {
  var scoreCard, frame;

  beforeEach(function() {
    frame = new Frame;
    scoreCard = new ScoreCard(frame);
  });

  it('starts with a frames array with one object', function() {
    expect(scoreCard.frames[0]).toEqual(frame);
  });

  it('has a current frame function', function() {
    expect(scoreCard.currentFrame()).toEqual(scoreCard.frames[0])
  })

  it('can decide if on first or second roll', function() {
    expect(scoreCard.isFirstRoll()).toEqual(true)
  })

  it('tells Frame to add score', function() {
    scoreCard.addScore(3)
    expect(scoreCard.currentFrame().score).toEqual(3)
  })

  it('adds new frame to frames aray with addFrame()', function() {
    scoreCard.addFrame(new Frame);
    expect(scoreCard.frames.length).toEqual(2)
  })

  it('checks for tenth frame condition', function() {
    for (var i = 0; i < 9; i++) {
      scoreCard.addScore(10);
    };
    expect(scoreCard.frames.length).toEqual(10);
    expect(scoreCard.isTenthFrame()).toEqual(true);
  })

  describe('tenth frame is a strike', function() {
    it('calculates bonus for tenth frame', function() {
      for (var i = 0; i < 10; i++) {
        scoreCard.addScore(10);
      };
      scoreCard.addScore(5)
      scoreCard.addScore(5)
      expect(scoreCard.frames.length).toEqual(10)
      expect(scoreCard.frames[9].bonus).toEqual(10)
            console.log(scoreCard)
    })
  })

  describe('bowler adds two new scores that are non strike', function() {
    it('adds a new frame', function() {
      scoreCard.addScore(1);
      scoreCard.addScore(1);
      expect(scoreCard.frames.length).toEqual(2);
    })
  })

  describe('bowler enters a strike in first frame and non strikes in second', function() {
    it('adds strike bonus for first frame', function() {
      scoreCard.addScore(10);
      scoreCard.addScore(2);
      scoreCard.addScore(2);
      expect(scoreCard.frames[0].bonus).toEqual(4)
    })
  })

  describe('bowler enters 3 strikes in a row', function() {
    it('adds strike bonus for first frame', function() {
      scoreCard.addScore(10);
      scoreCard.addScore(10);
      scoreCard.addScore(10);
      expect(scoreCard.frames[0].bonus).toEqual(20)
    })
  })

  describe('bowler knocks down all pins in single frame', function() {
    it('can calculate a spare bonus points', function() {
      scoreCard.addScore(5)
      scoreCard.addScore(5)
      scoreCard.addScore(5)
      expect(scoreCard.frames[0].bonus).toEqual(5)
    })
  })

});
