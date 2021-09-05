/*jshint esversion: 6 */

describe('CalculateScore', () => {
  
  'use strict';

  let calculateScore;
  let frame;

  beforeEach(() => {
    calculateScore = new CalculateScore();
    frame = new Frame();
  });

  const addFrames = (howManyFrames, firstBowl, secondBowl) => {
    for(let i = 1; i <= howManyFrames; i++) {
      frame.addBowl(firstBowl);
      frame.addBowl(secondBowl);
      calculateScore.addFrame(frame.bowls());
    }
  };

  const addTenthFrame = (firstBowl, secondBowl, thirdBowl) => {
    frame.addBowl(firstBowl);
    frame.addBowl(secondBowl);
    frame.addBowl(thirdBowl);
    calculateScore.addFrame(frame.bowls());
  };


  describe('new', () =>{
    it('it is expected to be an instance of CalculateScore', () => {
      expect(calculateScore).toBeInstanceOf(CalculateScore);
    });

    it('is expected to have a score attribute', () => {
      expect(calculateScore).toEqual(jasmine.objectContaining( { _score: 0, _frames: [] } ));
    });
  });

  describe('addFrame', () => {
    it('is expected to add a frame to _frames array', () => {
      addFrames(1, 4, 5);
      expect(calculateScore._frames).toContain([4, 5]);
    });
  });

  describe('total', () => {
    it('is expected to tally the score up', () => {
      addFrames(10, 5, 4);
      calculateScore.total();
      expect(calculateScore._score).toEqual(90);
    });

    it('is expected to calculate only spares', () => {
      addFrames(9, 5, 5);
      addTenthFrame(5, 5, 5);
      calculateScore.total();
      expect(calculateScore._score).toEqual(150);
    });

    it('is expected to calculate a game of only spares', () => {
      addFrames(9, 9, 1);
      addTenthFrame(9, 1, 9);
      calculateScore.total();
      expect(calculateScore._score).toEqual(190);
    });

    it('is expected to calculate a game of only strikes', () => {
      addFrames(9, 10, 0);
      addTenthFrame(10, 10, 10);
      calculateScore.total();
      expect(calculateScore._score).toEqual(300);
    });

    it('is expected to return a gutterball game as zero', () => {
      addFrames(10, 0, 0);
      calculateScore.total();
      expect(calculateScore._score).toEqual(0);
    });

    it('is expected to calculate a mixed game', () => {
      addFrames(2, 4, 4);
      addFrames(4, 10, 0);
      addFrames(2, 5, 5);
      addFrames(1, 0, 10);
      addFrames(1, 7, 0);
      calculateScore.total();
      expect(calculateScore._score).toEqual(170);
    });
  });

});