'use strict';

describe('CalculateScore', () => {

  let calculateScore;

  beforeEach(() => {
    calculateScore = new CalculateScore();
  });

  describe('new', () =>{
    it('it is expected to be an instance of CalculateScore', () => {
      expect(calculateScore).toBeInstanceOf(CalculateScore);
    });

    it('is expected to have a score attribute', () => {
      expect(calculateScore).toEqual(jasmine.objectContaining( { _score: 0 } ));
    })

  })
})