'use strict';

describe('Score', function () {
  var score;

  beforeEach(function () {
    score = new Score();
  });

  it('should return user total points', function() {
    score.userPins(1,1,3);
    score.userPins(1,2,7);
    expect(score.total()).toBe(10);
  });

  it('should return user points per frame', function() {
    score.userPins(1,1,10);
    expect(score.totalFrame(1)).toBe(10);
    expect(score.totalFrame(2)).toBe(0);
  });


});
