'use strict';

describe('CalculateScore', () => {

  let calculateScore;
  let frame;

  beforeEach(() => {
    calculateScore = new CalculateScore();
    frame = new Frame();
  });

  describe('new', () =>{
    it('it is expected to be an instance of CalculateScore', () => {
      expect(calculateScore).toBeInstanceOf(CalculateScore);
    });

    it('is expected to have a score attribute', () => {
      expect(calculateScore).toEqual(jasmine.objectContaining( { _score: 0, _frames: [] } ));
    })
  })

  describe('addFrame', () => {
    it('is expected to add a frame to _frames array', () => {
      frame.addBowl(4);
      frame.addBowl(5);
      calculateScore.addFrame(frame.bowls())
      expect(calculateScore._frames).toContain([4, 5])
    })
  })

  describe('tallyUp', () => {
    it('is expected to tally the score up', () => {
      for(let i = 1; i <= 10; i++) {
        frame.addBowl(5);
        frame.addBowl(4);
        calculateScore.addFrame(frame.bowls());
      };
      calculateScore.total();
      expect(calculateScore._score).toEqual(90);
    })
  })

})