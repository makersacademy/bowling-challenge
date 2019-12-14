'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('the number of pins knocked can be added to the scorecard', function(){
      bowling.addScore(5)
      expect(bowling.scores).toContain(5);
  });
});
