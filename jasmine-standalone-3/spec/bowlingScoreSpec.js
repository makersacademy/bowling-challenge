'use strict';

describe('Bowling Score', function(){

  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  });

  it('shows points', function() {
    expect(scorer.showPoint(7)).toEqual(7)
  });

  it('stores points in an array', function() {
    scorer.insert(7)
    expect(scorer.points).toContain(7)
  });
});
